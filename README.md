# Portfolio Website - Senior Developer Structure

A professional portfolio website built with React, Vite, and Tailwind CSS, following senior developer best practices for code organization and maintainability.

## 🏗️ Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── About.jsx         # About section component
│   ├── Contact.jsx       # Contact form and info component
│   ├── Footer.jsx        # Footer component
│   ├── Hero.jsx          # Hero/landing section component
│   ├── Navigation.jsx    # Header navigation component
│   ├── ProjectCard.jsx   # Individual project card component
│   ├── Projects.jsx      # Projects grid section component
│   └── index.js          # Component exports
├── data/                 # Static data and mock content
│   └── portfolio-data.js # Project data, navigation items, etc.
├── hooks/                # Custom React hooks
│   └── usePortfolio.js   # Portfolio-specific hooks
├── utils/                 # Utility functions
│   └── helpers.js        # Helper functions (scroll, debounce, etc.)
├── types/                # TypeScript type definitions
│   └── portfolio.types.ts # Type definitions for portfolio data
├── constants/             # Application constants
│   └── app-constants.js  # Color schemes, animations, etc.
├── App.jsx               # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles with Tailwind imports
```

## 🚀 Features

- **Modular Architecture**: Clean separation of concerns with dedicated folders for components, data, hooks, and utilities
- **Custom Hooks**: Reusable hooks for form management, scroll tracking, and active section detection
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Hover effects, transitions, and scroll animations
- **Type Safety**: TypeScript definitions for better development experience
- **Performance Optimized**: Debounced scroll handlers and efficient re-renders

## 🛠️ Development

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

## 📁 Component Architecture

### Components

Each component is self-contained with:

- Clear prop interfaces
- JSDoc documentation
- Responsive design
- Accessibility considerations

### Custom Hooks

- `useActiveSection`: Tracks which section is currently in view
- `useScrolling`: Manages scroll state
- `useForm`: Handles form state and validation

### Utilities

- `scrollToSection`: Smooth scrolling functionality
- `debounce`/`throttle`: Performance optimization helpers
- `formatYear`: Data formatting utilities

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first breakpoints
- **Custom Animations**: Smooth transitions and hover effects
- **Color System**: Consistent color palette defined in constants

## 📱 Responsive Breakpoints

- Mobile: Default (< 768px)
- Tablet: `md` (768px+)
- Desktop: `lg` (1024px+)
- Large Desktop: `xl` (1280px+)

## 🔧 Customization

### Adding New Projects

Edit `src/data/portfolio-data.js` to add or modify projects.

### Styling Changes

- Colors: Update `src/constants/app-constants.js`
- Components: Modify individual component files
- Global styles: Edit `src/index.css`

### Adding New Sections

1. Create component in `src/components/`
2. Add to `src/components/index.js`
3. Import and use in `src/App.jsx`
4. Update navigation data if needed

## 📦 Dependencies

- **React 18**: UI library
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Styling framework
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## 🚀 Deployment

The application builds to static files that can be deployed to any static hosting service:

- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📝 Best Practices Implemented

- **Component Composition**: Small, focused components
- **Custom Hooks**: Reusable logic extraction
- **Performance**: Debounced event handlers
- **Accessibility**: Semantic HTML and ARIA labels
- **Code Organization**: Clear folder structure
- **Documentation**: JSDoc comments throughout
- **Type Safety**: TypeScript definitions
- **Error Handling**: Graceful fallbacks
