# Task Master - A Colorful Todo App

A vibrant, fun, and interactive todo list application built with React and Vite.

## Features

- ✨ Colorful and lively UI with playful animations
- 🎯 Categorize tasks with color-coded labels
- 🎉 Confetti animations when completing tasks
- 🔄 Drag and drop for reordering tasks
- 🌈 Glass morphism design for a modern look
- ⌨️ Keyboard shortcuts for power users
- 📱 Fully responsive design
- 🔍 Filter tasks by status and category
- 💾 Local storage persistence

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Run the development server:

```bash
npm run dev
```

The application will be available at http://localhost:5173 (or another port if 5173 is in use).

### Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Usage

- Add new tasks using the form at the top
- Mark tasks as complete by clicking the checkbox
- Edit or delete tasks using the action buttons
- Drag and drop tasks to reorder them
- Filter tasks by status (All, Active, Completed) or category
- Use keyboard shortcuts:
  - `n`: Focus the new todo input
  - `?`: Show/hide keyboard shortcuts help
  - `Esc`: Close dialogs

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (for animations)
- React Beautiful DnD (for drag and drop)
- React Icons
- Canvas Confetti (for completion celebrations)

## Color Scheme

The app uses a vibrant color palette with the following categories:

- Work: Blue
- Personal: Purple
- Shopping: Green
- Health: Orange
- Other: Gray

## Design Choices

- **Glass Morphism**: Creates a modern, depth-filled UI
- **Rounded Corners**: For a friendly, approachable feel
- **Micro-interactions**: Small animations for better feedback
- **Confetti**: Celebration when completing tasks for positive reinforcement
- **Drag and Drop**: Intuitive task reordering
- **Responsive Design**: Works on all device sizes