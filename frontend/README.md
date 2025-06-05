# Intelligensi.ai Frontend

A modern React-based frontend application for Intelligensi.ai, built with Create React App.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or later)
- npm (v6 or later) or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd theme-craft-hackathon/frontend
   ```

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

### Environment Variables

Create a `.env` file in the root directory to define environment-specific variables:

```
REACT_APP_API_URL=your_api_url_here
REACT_APP_ENV=development
```

## 🚀 Deployment

For deployment instructions, please refer to the [Create React App deployment guide](https://facebook.github.io/create-react-app/docs/deployment).

## 📚 Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [React Router documentation](https://reactrouter.com/)
- [Material-UI documentation](https://mui.com/)

## 🤝 Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
