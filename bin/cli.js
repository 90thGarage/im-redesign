#!/usr/bin/env node
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "fs-extra";
import { cac } from "cac";
import * as p from "@clack/prompts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const TEMPLATES = path.join(ROOT, "templates");

const AGENTS = {
  claude: { label: "Claude Code", skills: ".claude/skills", commands: ".claude/commands", base: ".claude/" },
  antigravity: { label: "Antigravity", skills: ".agents/skills", commands: ".agents/commands", base: ".agents/" },
  cursor: { label: "Cursor", skills: ".cursor/skills", commands: ".cursor/commands", base: ".cursor/" },
  codex: { label: "Codex", skills: ".codex/skills", commands: ".codex/commands", base: ".codex/" },
};

const cli = cac("redesign-ui-kit");
cli.option("--yes", "Instalar todo sin preguntar");
cli.option("--agent <agent>", "claude | antigravity | cursor | codex");
cli.option("--dir <dir>", "Directorio del proyecto (default: actual)");
cli.option("--force", "Sobrescribir sin confirmar");
cli.option("--skip-base", "No instalar las skills base (react-19, tailwind-4, typescript)");
cli.help();
const parsed = cli.parse();
const options = parsed.options;
const action = parsed.args[0];
const cwd = path.resolve(options.dir || process.cwd());

// ---------- helpers ----------
function detectStack(root) {
  const rows = [];
  let deps = {};
  const pkgPath = path.join(root, "package.json");
  if (fs.existsSync(pkgPath)) {
    const pkg = fs.readJsonSync(pkgPath, { throws: false }) || {};
    deps = { ...(pkg.dependencies || {}), ...(pkg.devDependencies || {}) };
  }
  const has = (d) => Boolean(deps[d]);
  const viteCfg = ["vite.config.ts", "vite.config.js", "vite.config.mts"].some((f) =>
    fs.existsSync(path.join(root, f))
  );
  rows.push(has("react") ? ["ok", "React"] : ["warn", "React no detectado"]);
  rows.push(viteCfg ? ["ok", "Vite"] : has("next") ? ["warn", "Next.js detectado (el kit asume Vite)"] : ["warn", "Vite no detectado"]);
  rows.push(has("typescript") ? ["ok", "TypeScript"] : ["dim", "TypeScript no detectado"]);
  rows.push(has("tailwindcss") || has("@tailwindcss/vite") ? ["ok", "Tailwind"] : ["warn", "Tailwind no detectado"]);
  rows.push(fs.existsSync(path.join(root, "components.json")) ? ["ok", "shadcn/ui"] : ["warn", "shadcn/ui no detectado (lo configura /im-setup)"]);
  return rows;
}

function readCommands() {
  const dir = path.join(TEMPLATES, "commands");
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith(".md")).map((f) => {
    const txt = fs.readFileSync(path.join(dir, f), "utf8");
    const m = txt.match(/^description:\s*(.+)$/m);
    return { name: f.replace(/\.md$/, ""), desc: m ? m[1].trim() : "" };
  });
}

// ---------- actions (sin intro/outro: lo maneja el router) ----------
async function installCore() {
  const s0 = p.spinner();
  s0.start("Detectando proyecto");
  const stack = detectStack(cwd);
  s0.stop("Proyecto detectado");
  for (const [kind, msg] of stack) {
    if (kind === "ok") p.log.success(msg);
    else if (kind === "warn") p.log.warn(msg);
    else p.log.message(msg);
  }

  let agent = options.agent;
  if (!agent && !options.yes) {
    const a = await p.select({
      message: "¿Para qué agente?",
      options: Object.entries(AGENTS).map(([value, def]) => ({ value, label: def.label, hint: def.base })),
    });
    if (p.isCancel(a)) return false;
    agent = a;
  }
  if (!agent) {
    p.log.error("Especificá el agente con --agent claude|antigravity|cursor|codex");
    return false;
  }
  const agentDef = AGENTS[agent];
  if (!agentDef) {
    p.log.error(`Agente desconocido: ${agent}. Usá claude|antigravity|cursor|codex.`);
    return false;
  }

  // Paso aparte: skills base del stack (genericas, no de InfoManager)
  let withBase;
  if (options.skipBase) withBase = false;
  else if (options.yes) withBase = true;
  else {
    const b = await p.confirm({
      message: "¿Instalar también las skills base del stack (React 19, Tailwind 4, TypeScript)? Útil si el proyecto no las tiene; omitir si ya seguís esas convenciones.",
      initialValue: true,
    });
    if (p.isCancel(b)) return false;
    withBase = b;
  }

  if (!options.yes && !options.force) {
    const ok = await p.confirm({ message: `Copio el kit en ${agentDef.skills} y ${agentDef.commands}. Sobrescribe solo archivos del kit con el mismo nombre; NO borra ni toca tus otros archivos. ¿Confirmás?` });
    if (p.isCancel(ok) || !ok) return false;
  }

  const s = p.spinner();
  s.start("Instalando");
  // skills propias de InfoManager
  await fs.copy(path.join(TEMPLATES, "skills"), path.join(cwd, agentDef.skills), { overwrite: true });
  p.log.success(`${fs.readdirSync(path.join(TEMPLATES, "skills")).length} skills de InfoManager → ${agentDef.skills}`);
  // comandos
  await fs.copy(path.join(TEMPLATES, "commands"), path.join(cwd, agentDef.commands), { overwrite: true });
  p.log.success(`${fs.readdirSync(path.join(TEMPLATES, "commands")).length} comandos → ${agentDef.commands}`);
  // skills base (opcional) -> van en la misma carpeta de skills
  const baseDir = path.join(TEMPLATES, "base-skills");
  if (withBase && fs.existsSync(baseDir)) {
    for (const entry of fs.readdirSync(baseDir)) {
      await fs.copy(path.join(baseDir, entry), path.join(cwd, agentDef.skills, entry), { overwrite: true });
    }
    p.log.success(`skills base (react-19, tailwind-4, typescript) → ${agentDef.skills}`);
  } else {
    p.log.message("skills base omitidas");
  }
  s.stop("Archivos copiados");
  return true;
}

const CMD_HELP = {
  "im-go": { args: "<ruta-o-vista>", desc: "TODO EN UNO: setup (si hace falta) → restyle → review (.md) → arregla. Recomendado.", input: "indicá la vista; hace el resto solo" },
  "im-setup": { args: "", desc: "prepara el proyecto (shadcn + tokens + fuentes), sin romper nada", input: "no requiere nada" },
  "im-restyle": { args: "<ruta-o-vista>", desc: "reembellece una vista preservando API y lógica", input: "indicá el archivo/carpeta de la vista" },
  "im-review-ui": { args: "<ruta-o-vista>", desc: "verifica que el restyle no rompió nada y quedó estándar", input: "la vista reembellecida (con git diff si hay)" },
};
const CMD_ORDER = ["im-go", "im-setup", "im-restyle", "im-review-ui"];

function helpCore() {
  const present = new Set(readCommands().map((c) => c.name));
  p.log.info("Comandos — usalos dentro de tu agente:");
  for (const name of CMD_ORDER) {
    if (!present.has(name)) continue;
    const h = CMD_HELP[name];
    p.log.message(`/${name} ${h.args}`.trim() + `  —  ${h.desc}`);
    p.log.message(`     ↳ ${h.input}`);
  }
  p.log.message("Simple:  /im-go <vista>  (hace todo)   ·   Avanzado:  /im-setup → /im-restyle → /im-review-ui");
}

function licenseCore() {
  const lic = path.join(ROOT, "LICENSE");
  p.log.info("Licencia");
  const text = fs.existsSync(lic) ? fs.readFileSync(lic, "utf8").trim() : "LICENSE no encontrado.";
  console.log("\n" + text + "\n");
}

// ---------- router ----------
async function run() {
  p.intro("InfoManager Restyle · skills + comandos — by 90th Garage");
  let act = action;
  if (!act) {
    const choice = await p.select({
      message: "¿Qué querés hacer?",
      options: [
        { value: "install", label: "Instalar skills + comandos", hint: "elegís el agente" },
        { value: "help", label: "Uso de comandos", hint: "qué hace cada /comando" },
        { value: "license", label: "Ver licencia" },
        { value: "exit", label: "Salir" },
      ],
    });
    if (p.isCancel(choice)) return p.cancel("Cancelado.");
    act = choice;
  }

  switch (act) {
    case "install": {
      const ok = await installCore();
      return p.outro(ok ? "Listo ✓  En tu agente: /im-go <vista> (hace todo)." : "Cancelado.");
    }
    case "help":
    case "usage":
      helpCore();
      return p.outro("Tip: corré /im-go <vista> en tu agente (hace todo).");
    case "license":
      licenseCore();
      return p.outro("");
    case "exit":
      return p.outro("Listo 👋");
    default:
      helpCore();
      return p.outro(`Comando desconocido: ${act}`);
  }
}

run().catch((e) => {
  p.log.error(String((e && e.message) || e));
  process.exit(1);
});
