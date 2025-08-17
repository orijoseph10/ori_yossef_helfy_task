# Full-Stack Task Manager Monorepo

This is a full-stack task management application built using a pnpm monorepo. It features a React (TypeScript) frontend and an Express (TypeScript) backend, with a shared package for common types to ensure type safety across the entire application.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (v18.x or later recommended)
- pnpm (v8.x or later recommended)

If you don't have pnpm installed, you can install it using the following command:

```bash
npm i -g pnpm
```

## Getting Started

Follow these steps to get the project up and running on your local machine.

Clone the repository:

```bash
git clone https://github.com/orijoseph10/ori_yossef_helfy_task.git
cd ori_yossef_helfy_task
```

## Install dependencies:

From the root of the project, run the following command. This will install dependencies for all packages (frontend, backend, and shared) in the monorepo.

```bash
pnpm install
```

## Run the application:

To start both the frontend and backend development servers concurrently, run the following command from the root directory:

```bash
pnpm dev
```

The Backend API will be running on http://localhost:4000

The React Frontend will be running on http://localhost:5173 (or another port if 5173 is in use).

## Available Scripts

All scripts should be run from the root of the monorepo.

pnpm dev: Starts both the backend and frontend development servers.

pnpm start:backend: Starts only the backend server.

pnpm start:frontend: Starts only the frontend development server.
