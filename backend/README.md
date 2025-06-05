# Firebase Backend Setup

This guide will help you set up and deploy the Firebase backend for the application.

## Prerequisites

1. [Node.js](https://nodejs.org/) (v20 or higher)
2. [Firebase CLI](https://firebase.google.com/docs/cli) (latest version)
3. A Firebase project created in the [Firebase Console](https://console.firebase.google.com/)

## Setup Instructions

### 1. Install Dependencies

```bash
# Navigate to the functions directory
cd functions

# Install project dependencies
npm install
```

### 2. Firebase Login and Project Setup

1. Log in to Firebase:
   ```bash
   firebase login
   ```

2. Initialize Firebase (if not already initialized):
   ```bash
   firebase init functions
   ```
   - Select your Firebase project or create a new one
   - Choose TypeScript as the language
   - Use ESLint for code linting
   - Install dependencies with npm

### 3. Environment Configuration

Create a `.env` file in the `functions` directory with the following variables:

```env
# Firebase Service Account (get from Firebase Console > Project Settings > Service Accounts)
FIREBASE_SERVICE_ACCOUNT={"type": "service_account", ...}

# Supabase
SUPABASE_URL=your_supabase_url
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# JWT Secret
JWT_SECRET=your_jwt_secret

# AWS Lightsail (if applicable)
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
```

### 4. Local Development

To run the Firebase emulator locally:

```bash
# Start the Firebase emulator
npm run serve
```

This will:
- Build the TypeScript code
- Start the Firebase emulator
- Make the functions available at `http://localhost:5001/YOUR_PROJECT_ID/us-central1/`

### 5. Deployment

Before deploying, make sure to:
1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to Firebase:
   ```bash
   # Deploy all functions
   firebase deploy --only functions
   
   # Or deploy a specific function
   firebase deploy --only functions:yourFunctionName
   ```

### 6. Available Scripts

- `npm run lint`: Run ESLint to check code quality
- `npm run lint:fix`: Fix linting issues automatically
- `npm run build`: Compile TypeScript to JavaScript
- `npm run serve`: Start the local emulator
- `npm run deploy`: Deploy functions to Firebase
- `npm run logs`: View function logs

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
