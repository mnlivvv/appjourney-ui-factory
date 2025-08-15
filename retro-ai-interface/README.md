# RetroFuture AI Interface

A retro-futuristic UI interface reminiscent of early computer systems and classic sci-fi films.

## Features

- Retro-style terminal interface with classic CRT monitor effects
- Interactive command line terminal emulator
- Real-time AI system monitoring and status visualization
- Model training and analytics simulations
- Complete system settings module
- Responsive design for all screen sizes

## Technologies Used

- React 18
- Vite
- React Router
- Framer Motion for animations
- Typed.js for terminal typing effects

## Visual Design Elements

- Green monochrome color palette on dark background
- CRT monitor effects with scan lines and screen curvature
- Pixelated/dot-matrix style fonts and monospace text
- Retro-style icons and simple animations
- Faux LED indicators and chunky buttons

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone <repository-url>
   cd retro-ai-interface
   ```

2. Install dependencies
   ```
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── assets/
│   └── images/       # Image files
├── components/       # React components
│   ├── Dashboard.jsx
│   ├── Terminal.jsx
│   ├── AIAnalytics.jsx
│   ├── ModelTraining.jsx
│   ├── Settings.jsx
│   ├── Header.jsx
│   ├── Sidebar.jsx
│   ├── Footer.jsx
│   └── NotFound.jsx
├── styles/           # CSS files
├── App.jsx           # Main app component
└── main.jsx          # Entry point
```

## Building for Production

```
npm run build
# or
yarn build
```

The build files will be located in the `dist` directory.

## Preview Production Build

```
npm run preview
# or
yarn preview
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Inspired by classic sci-fi interfaces and retro computing aesthetics
- Terminal emulation inspired by old-school command line interfaces