# Skeuomorphic Todos App

A React-based todos application with a skeuomorphic UI design that resembles a physical paper notepad or planner.

## Features

- Add, toggle, and delete todos
- Pin important todos to the board
- Drag and drop todos around the board
- Persistence using localStorage
- Realistic paper-like UI with textures and shadows
- Visual effects like torn paper edges and paper clips

## Design Elements

The app uses various skeuomorphic design elements to create a realistic "physical" feel:

- Lined paper texture for notes and forms
- Cork board background texture
- Torn paper edges effect
- Pushpins and paper clips as interactive elements
- Handwriting-style font
- Realistic shadows and layering
- Page-turn animations

## Getting Started

```bash
# Install dependencies
npm install

# Run the development server
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
├── context/        # Context for state management
├── hooks/          # Custom hooks (like useDraggable)
├── styles/         # CSS styling files
├── assets/         # Images and other static assets
├── App.tsx         # Main App component
└── main.tsx        # Application entry point
```

## Technologies

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **ESLint** - Code linting
- **CSS3** - Styling with custom textures and effects