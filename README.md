# Full-Stack Task Manager Monorepo

This is a full-stack task management application built using a monorepo. It features a React (TypeScript) frontend and an Express (TypeScript) backend, with a shared package for common types to ensure type safety across the entire application.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v18.x or later recommended)
- **npm** (comes bundled with Node.js)

## Getting Started

Follow these steps to get the project up and running on your local machine.

### 1\. Clone the Repository

```bash
git clone https://github.com/orijoseph10/ori_yossef_helfy_task.git
cd ori_yossef_helfy_task
```

### 2\. Install Dependencies

From the root of the project, run the following command. This will install dependencies for all packages (frontend, backend, and shared) in the monorepo.

```bash
npm install
```

### 3\. Run the Application

To start both the frontend and backend development servers concurrently, run the following command from the root directory:

```bash
npm run dev
```

- The **Backend API** will be running on `http://localhost:4000`
- The **React Frontend** will be running on `http://localhost:5173` (or another port if 5173 is in use).

## Available Scripts

All scripts should be run from the root of the monorepo.

- `npm run dev`: Starts both the backend and frontend development servers.
- `npm run start:backend`: Starts only the backend server.
- `npm run start:frontend`: Starts only the frontend development server.
