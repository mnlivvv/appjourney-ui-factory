# Mindful Tasks - A Serene Todo App

A minimalist and serene todo application with mindfulness features, built with React, TypeScript, and Vite.

## Features

- **Clean, Minimalist UI** with a focus on whitespace and readability
- **Dark/Light Mode Support** using system preferences
- **Todo Management**:
  - Add, edit, and delete tasks
  - Mark tasks as important
  - Mark tasks as completed
  - Filter tasks (all, active, completed, important)
  - Clear completed tasks
- **Mindfulness Features**:
  - Pomodoro timer with work/break cycles
  - Daily inspirational quotes
  - Focus mode that hides all but the current task
  - Subtle transitions and haptic feedback
- **Responsive Design** that works on desktop, tablet, and mobile devices
- **Persistent Storage** using browser's local storage

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Builds the app for production
- `npm run preview` - Previews the production build locally
- `npm run lint` - Runs ESLint to check code quality

## Project Structure

```
src/
├── components/     # React components
│   ├── DailyQuote.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── PomodoroTimer.tsx
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── hooks/          # Custom React hooks
│   ├── useLocalStorage.ts
│   └── usePomodoro.ts
├── types.ts        # TypeScript type definitions
├── App.css         # Main CSS styles
├── App.tsx         # Main App component
└── main.tsx        # Application entry point
```

## Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite 7** - Build tool and dev server
- **CSS Variables** - Theming and responsive design
- **UUID** - Unique ID generation
- **Local Storage** - Persistent data

## Design Philosophy

This app follows minimalist design principles, with an emphasis on:

- **Simplicity** - Focused on essential functionality without clutter
- **Mindfulness** - Features that encourage concentration and reflection
- **Accessibility** - Clear typography and sufficient contrast
- **Serenity** - Calming colors and ample whitespace

## How to Use

1. Add new tasks using the input field at the top
2. Click on the circle to mark a task as complete
3. Click on the star to mark a task as important
4. Click on the task text to edit it
5. Use the filters to view different task categories
6. Enable focus mode using the button in the header
7. Use the Pomodoro timer to practice time management
8. Read the daily quote for inspiration and mindfulness

## License

This project is licensed under the MIT License.