# ai-school-launch-control

Centro de controle de lançamento do projeto AI School Brazil: gestão de tarefas, timeline, workstreams, equipe, KPIs e matriz de risco em um painel interativo. SPA client-side, sem backend.

## Stack

- **Linguagem:** JavaScript (JSX), ES modules (`"type": "module"`).
- **Framework:** React 18 + **Vite 7**.
- **Estilo:** Tailwind CSS 3 (+ PostCSS/autoprefixer). Ícones Lucide React.
- **Gráficos/datas:** Recharts, `date-fns`.
- **Estado:** React Context (`src/context/ProjectContext.jsx`) + persistência em `localStorage`.
- **Banco:** nenhum.
- **Deploy:** Vercel (`framework: "vite"`, output `dist`).
- **Package manager:** npm (lockfile = `package-lock.json`).

## Comandos

Do `package.json` (não há test nem lint):

- `npm run dev` — Vite dev server (porta 5557).
- `npm run build` — build de produção em `dist/`.
- `npm run preview` — pré-visualiza o build.

`start-server.sh` sobe o dev em porta/host fixos (script local).

## Estrutura

- `src/main.jsx` — entrypoint. `src/App.jsx` — app raiz. `src/TestApp.jsx` — app de teste/scratch.
- `src/context/ProjectContext.jsx` — estado global do projeto (fonte de verdade das tarefas/status).
- `src/data/projectData.js` — dados-semente (tarefas, timeline, workstreams, KPIs, riscos).
- `src/components/` — as 6 views + auxiliares: `Dashboard`, `Timeline`/`MasterTimeline`, `Workstreams`, `TeamView`, `KPITracker`, `RiskMatrix`, `PublicPartnerships`, `TaskEditModal`.
- `index.html` — shell Vite.

## Convenções de código

- React funcional com hooks; sem TypeScript.
- Estado compartilhado via `ProjectContext` — novas telas consomem o contexto, não duplicam estado.
- Tailwind com paleta custom (`primary`/`success`/`warning`/`danger`/`purple`) em `tailwind.config.js` — use os tokens.
- Dados iniciais centralizados em `src/data/projectData.js`.
- Não há ESLint configurado; mantenha estilo consistente com o código existente.

## Variáveis de ambiente

App puramente client-side — nenhuma env necessária. Se adicionar, use prefixo `VITE_` (público, nunca segredos) e configure na Vercel.

## CI/CD & Deploy

Sem workflows em `.github/`. Deploy pela integração Vercel a partir da `main` (framework vite, build `npm run build`, output `dist`).

Recomendado (via PR): workflow mínimo `npm ci` + `npm run build` em push/PR para `main`. Adicionar ESLint + script `lint` melhoraria a qualidade.

## Boas práticas de PR

- Branches: `feat/...`, `fix/...`, `chore/...`.
- Conventional Commits.
- PRs pequenos; ao alterar timeline/datas ou dados-semente, descreva a mudança.
- Checklist: `npm run build` passa, **sem segredos**, screenshots para mudanças de UI/views.
- ≥1 review; squash merge; `main` sempre deployável.

## Testes

Sem testes e sem lint. Proporcional ao projeto: se a lógica de progresso/status em `ProjectContext` crescer, extraia funções puras e adicione testes unitários leves.

## Segurança & dados

- Nunca commitar `.env`/chaves; qualquer `VITE_*` é público.
- Dados de tarefas/equipe podem conter nomes de pessoas — trate com cuidado (LGPD) se houver dados pessoais reais além de nomes de responsáveis.
- Persistência é `localStorage`: dados ficam no navegador, não sincronizam entre dispositivos.

## Gotchas

- **`start-server.sh` tem caminho absoluto e porta 9999** (`/Users/Raphael/Desktop/BP K12/...`) que não corresponde à porta 5557 do `vite.config.js`; é script local, ajuste antes de reutilizar.
- **`src/TestApp.jsx`** é scratch — confirme que o entrypoint monta `App.jsx`, não o TestApp, antes de buildar.
- **Sem backend:** todo estado vive no navegador; não espere colaboração multiusuário.
- `vercel.json` fixa `framework: "vite"` e `outputDirectory: dist` — não remover.
