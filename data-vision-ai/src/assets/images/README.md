# DataVision AI - Minimalist Data Visualization Dashboard

A minimalist React application for AI data visualization and model management, built with Vite and focused on clean, efficient data presentation.

## Features

- **Minimalist UI**: Clean design with white/light gray background and accent colors
- **Data Visualization**: Multiple chart types using Recharts (line charts, bar charts, pie charts, radar charts)
- **AI Model Management**: View, filter, and manage AI models
- **Analytics Dashboard**: Interactive analytics with time range filtering
- **Settings Management**: Configure application preferences, API settings, and notifications

## Tech Stack

- React
- Vite
- React Router for navigation
- Recharts for data visualization
- Custom CSS for styling

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Build for production:
   ```
   npm run build
   ```

## Project Structure

```
src/
├── assets/
│   └── images/       # Image assets
├── components/       # Reusable components
│   ├── charts/       # Chart components
│   ├── DataTable.jsx
│   ├── Header.jsx
│   ├── MetricCard.jsx
│   └── ModelCard.jsx
├── pages/            # Page components
│   ├── Dashboard.jsx
│   ├── Analytics.jsx
│   ├── Models.jsx
│   └── Settings.jsx
├── utils/            # Utility functions
│   └── data.js       # Mock data generation
├── App.jsx           # Main App component
├── main.jsx          # Entry point
└── index.css         # Global styles
```

## Customization

- Colors and design variables can be modified in `src/index.css`
- Mock data generation functions are in `src/utils/data.js`
- Chart components in `src/components/charts/` can be extended for additional visualization types

## Design Principles

- **Minimalist UI**: Focus on data presentation without distractions
- **Grid System**: Consistent layout with a strict grid system
- **Typography**: Clear hierarchy with a legible sans-serif font
- **White Space**: Ample breathing room to prevent cognitive overload
- **Data-First**: Visualization as the primary design element