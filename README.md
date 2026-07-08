# Farm Fresh

> Farm Fresh is a bakery commerce workspace with a storefront, dashboard, backend services, and an OpenAI-powered LINE/customer assistant.

## The Story

Farm Fresh starts with a simple goal: bring AI-assisted behavior into a complete product workflow instead of leaving it as a loose experiment. Its shape tells the same story: the product interface, the service layer, and the AI-assisted workflow live close enough together that a maintainer can see the project as a whole before diving into individual folders.

## What It Includes

- A user-facing surface for the product, demo, dashboard, or static experience.
- A service layer for APIs, realtime behavior, bot logic, or server-side workflows.
- AI-assisted behavior through model providers, bot flows, or agent-oriented tooling.

## How It Is Put Together

| Path | Role |
| --- | --- |
| `.gitattributes` | project file or folder |
| `backend` | service, bot, API, or realtime layer |
| `dashboard` | frontend or dashboard application |
| `frontend` | frontend or dashboard application |
| `line-bot` | service, bot, API, or realtime layer |

## Local Development

```bash
git clone https://github.com/ENZOMOTIVE/Farm-Fresh.git
cd Farm-Fresh
```

```bash
cd backend
npm install
npm run dev
```

```bash
cd dashboard
npm install
npm run dev
```

```bash
cd frontend
npm install
npm run dev
```

```bash
cd line-bot
npm install
```

## Command Surface

| Area | Commands |
| --- | --- |
| `backend/package.json` | `test`, `dev` |
| `dashboard/package.json` | `dev`, `build`, `start`, `lint` |
| `frontend/package.json` | `dev`, `build`, `lint`, `preview` |

## Configuration

- Document API ports, database URLs, third-party credentials, and service endpoints in `.env.example` before deployment.
- Keep model provider keys such as OpenAI or AI SDK credentials in local environment files only.

## Quality Checks

- From `backend`, run `npm test`.
- From `dashboard`, run `npm run lint`.
- From `dashboard`, run `npm run build`.
- From `frontend`, run `npm run lint`.
- From `frontend`, run `npm run build`.

## Where To Take It Next

- Add screenshots or a short user flow so visitors can see the interface before running it.
- Document the main API routes, bot events, or service responsibilities with example inputs and outputs.
- Describe the model provider, prompt boundaries, and evaluation approach for the AI-assisted parts.
- Keep setup commands current whenever dependencies, scripts, or deployment targets change.
- Record important product decisions here so the repository keeps its story as the code evolves.

## Project Metadata

| Field | Details |
| --- | --- |
| Repository | `ENZOMOTIVE/Farm-Fresh` |
| Categories | `Agentic AI`, `Full Stack` |
| Primary stack | Next.js, React, Vite, Express, Node.js, TypeScript, JavaScript, HTML, CSS |


## License

No license file is currently committed. Add one before distributing this project publicly.
