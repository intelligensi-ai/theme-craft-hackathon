# 🚀 Intelligensi.ai Hackathon Met University

![Intelligensi.ai Logo](./public/Intelligensi-logo.png)

## 🌐 **About the Project**
**Intelligensi.ai V2** is an AI-powered content migration platform designed to automate and streamline the process of migrating legacy CMS content, media, and design to modern, AI-enhanced systems.  
This version introduces a **full-stack architecture** with:
- 🛠️ **Frontend**: React + TypeScript + Tailwind CSS  
- 🔥 **Backend**: TypeScript + Node.js + Firebase Functions  
- ⚙️ **Database**: PostGress + Vector Database (Weaviate)  
- 🌎 **Hosting**: Firebase Hosting with Google Cloud integration  

---

## 📁 **Project Structure**

---

### **Tech Stack**

A modern, full-stack TypeScript application with a serverless backend and cloud infrastructure.

### Frontend

React - Main frontend library
TypeScript - For type-safe JavaScript
Firebase Authentication - User authentication
Firebase Hosting - Frontend deployment
Material-UI (MUI) - UI component library
React Query - Data fetching and state management
Axios - HTTP client for API requests
React Hook Form - Form handling
Zod - Schema validation
React Router - Client-side routing


### **Backend**

Firebase Functions - Serverless backend
Node.js - JavaScript runtime
TypeScript - Type-safe JavaScript
Supabase - Database and authentication
AWS SDK - For AWS Lightsail integration
Express.js - Web application framework
Zod - Schema validation
Axios - HTTP client
PostgreSQL - Database (via Supabase)
Weaviate - Vector database for AI/ML features
OpenAI API - AI/ML capabilities

---

### DevOps & Infrastructure

AWS Lightsail - Cloud hosting for CMS such as Drupal and Wordpress sites
Firebase CLI - Deployment and management
Firebase Emulators - Local development
Docker - Containerization (implied by Drupal deployment)
Git - Version control
Development Tools
ESLint - Code linting
Prettier - Code formatting
npm - Package management

## Front End


### Installation

1. Clone the repository
   git clone https://github.com/intelligensi-ai/theme-craft-hackathon.git
   cd theme-craft-hackathon/frontend

2. Install dependencies

   npm install
   # or
   yarn install

### Available Scripts

In the project directory, you can run:

#### `npm start`
Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
- The page will automatically reload when you make changes
- You'll see any lint errors in the console
- Hot Module Replacement (HMR) is enabled by default

#### `npm test`
Launches the test runner in interactive watch mode.\
See the [running tests](https://facebook.github.io/create-react-app/docs/running-tests) documentation for more information.

#### `npm run build`
Builds the app for production to the `build` folder.\
- Optimizes the build for the best performance
- Minifies files and includes hashes in filenames
- Bundles React in production mode

#### `npm run eject`
**Note: This is a one-way operation. Once you `eject`, you can't go back!**

If you need full control over your build configuration, you can `eject` at any time. This command will copy all configuration files and transitive dependencies into your project.

## 🛠️ Development

### Project Structure

```
frontend/
├── public/           # Static files
├── src/              # Source files
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # Reusable UI components
│   ├── pages/        # Page components
│   ├── styles/       # Global styles and themes
│   ├── utils/        # Utility functions
│   ├── App.js        # Main App component
│   └── index.js      # Application entry point
├── .gitignore
├── package.json
└── README.md
```

### Backend

## Prerequisites
Node.js v20+

Firebase CLI (install with npm install -g firebase-tools)

Firebase account (you'll be added to the shared project)

## 1. Clone and Install

cd Intelligensi.ai.v2/backend/functions
npm install

## 2. Environment Setup
You’ll be given a .env file with all necessary values.
Place it in the functions/ directory:

# Confirm the file is present
3. Login to Firebase

firebase login

You’ll be prompted in the browser. Use the same email you shared with the team to access the project.

4. Run Locally

firebase use -- intelligensi-ai-v2 
npm run serve

This builds the project and starts the local emulator.
Local functions will be available at:

http://localhost:5001/<project-id>/us-central1/<function-name>

5. Deploy to Firebase
Only if needed:

npm run build        # Compile TypeScript
npm run serve        # Run local Firebase emulator
npm run deploy       # Deploy functions to Firebase
npm run logs         # View logs from deployed functions
npm run lint         # Check code style
npm run lint:fix     # Fix style issues automatically
Project Structure
bash
Copy
Edit
functions/
├── src/           # Source code
├── lib/           # Compiled JS
├── .env           # Provided environment variables
├── .eslintrc.js   # Code style config



## Project Structure

```
functions/
├── src/                  # TypeScript source files
│   ├── index.ts          # Main entry point for Cloud Functions
│   ├── services/         # Business logic and services
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions and helpers
├── lib/                  # Compiled JavaScript (auto-generated)
├── .env                  # Environment variables
└── .eslintrc.js          # ESLint configuration
```

## Troubleshooting

- **Firebase login issues**: Make sure you're logged in with `firebase login`
- **Missing permissions**: Ensure your Firebase account has the necessary permissions for the project
- **Build errors**: Run `npm install` if you encounter module not found errors
- **Environment variables**: Double-check that all required `.env` variables are set

## Support

For additional help, please contact the development team or refer to the [Firebase Documentation](https://firebase.google.com/docs).

# Supabase Access – Hackathon Setup

## Overview
You’ll be using a **shared Supabase instance** already set up by the team. You don’t need to create your own project — just plug in the credentials we provide.

---

## 1. Add Supabase Credentials to Your `.env`

You’ll be given the following values:

```
SUPABASE_URL=https://hacvqagzlqobaktgcrkp.supabase.co
SUPABASE_SERVICE_ROLE_KEY=xxxxx-xxxxx-xxxxx
```

Paste them into your `.env` file located in:
```
backend/functions/.env
```

If `.env` doesn’t exist yet, create it and paste the values in.

---

## 2. Using Supabase in Code

The backend is already configured to connect using the `.env` values. No changes are required.

If you want to make queries directly, here's an example from the codebase:

```ts
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)
```

---

## 3. Optional: Access Supabase Dashboard

If you want to inspect the database:
1. Go to: https://app.supabase.com
2. Login using the team account (credentials provided by organisers)
3. Select the project named **Intelligensi Hackathon** (or similar)

You can browse tables, run SQL queries, and inspect logs.

---

## Notes

- Don’t regenerate the service role key — it’s shared across all teams.
- Treat the key like a secret — **do not commit `.env` to Git**.
- Avoid heavy writes or destructive operations unless you're building a feature that needs it.
---


