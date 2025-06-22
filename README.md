# Word Game App

A modern word validation game built with React, TypeScript, and Vite. Players enter 5-letter words to test their vocabulary against a dictionary API.

## Features

- **5-letter word validation**: Enter words and check if they exist in the English dictionary
- **Dual input methods**: Use the on-screen keyboard or your physical keyboard
- **Real-time feedback**: Visual indicators show word validity (valid/invalid states)
- **Dark/Light theme**: Theme switcher for user preference
- **Responsive design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Clean, intuitive interface with smooth animations

## How to Play

1. Type a 5-letter word using either:
   - The virtual keyboard on screen
   - Your physical keyboard (A-Z keys)
2. Press Enter or click "ENTER" to submit your word
3. The app will validate your word against an online dictionary
4. Use Backspace or click "⌫" to delete letters

## Tech Stack

- **React 18** with TypeScript for type safety
- **Vite** for fast development and building
- **SCSS Modules** for component-scoped styling
- **Dictionary API** for word validation
- **Custom event system** for keyboard/UI interaction
- **React Icons** for UI elements

## Package Manager

This project supports both **pnpm** and **npm**:

- **pnpm** (recommended): Faster installs, efficient disk usage, and strict dependency resolution
- **npm**: Standard Node.js package manager, widely supported

Choose the package manager that best fits your workflow. The project includes a `pnpm-lock.yaml` file, but you can safely use npm if preferred.

## Getting Started

### Using pnpm (recommended)

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Using npm

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Development

This project uses:

- TypeScript for type checking
- ESLint for code linting
- SCSS modules for styling
- Vite for bundling and HMR
