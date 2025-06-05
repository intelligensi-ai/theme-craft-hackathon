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

## 🚀 **Tech Stack**
### 🛠️ **Frontend**
- **React 18** + **TypeScript**  
- **Tailwind CSS** for styling  
- **Vite** for faster builds  
- **Axios** for API calls  
- **Firebase Auth** for authentication  

### 🔥 **Backend**
- **Node.js + TypeScript**  
- **Firebase Functions** for serverless execution  
- **Supabase** or **Weaviate** for vector database queries  
- **BigQuery** for scalable data management  

---

## 🛠️ **Installation & Setup**


## Backend

## Prerequisites
Node.js v20+

Firebase CLI (install with npm install -g firebase-tools)

Firebase account (you'll be added to the shared project)

## 1. Clone and Install

git clone https://github.com/intelligensi-ai/Intelligensi.ai.v2.git
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


