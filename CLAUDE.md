# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **@fancy-ui-lib/fancy-ui**, a modern React component library built as a publishable NPM package. The library provides accessible UI components built with TypeScript, TailwindCSS, and Radix Primitives, following modern design system principles.

## Architecture

### Build System
- **Vite** configured in library mode (`vite.config.ts`) for dual ESM/CJS output
- **TypeScript** with declaration generation for full type safety
- **Dual package exports** supporting both `import` and `require` patterns
- **Library entry point**: `src/index.ts` exports all public components

### Component Architecture
Components follow a consistent pattern:
- **Radix Primitives** as unstyled base components for accessibility
- **Class Variance Authority (CVA)** for variant-based styling systems
- **Tailwind CSS** with CSS variables for theming and dark mode
- **Forward refs** for proper component composition
- **TypeScript interfaces** extending native HTML element props

Example component structure:
```
src/components/ComponentName/
├── ComponentName.tsx    # Main component implementation
└── index.ts            # Re-exports with types
```

### Styling System
- **CSS Variables** defined in `src/index.css` for light/dark themes
- **Tailwind config** (`tailwind.config.js`) extends with semantic color tokens
- **Class-based dark mode** using `dark:` prefix and document class toggling
- **CVA variants** for systematic component variations (size, variant, state)

### Key Dependencies
- **Radix UI**: Accessible primitives (`@radix-ui/react-dialog`, `@radix-ui/react-popover`, `@radix-ui/react-slot`)
- **react-day-picker**: Calendar component for DatePicker
- **date-fns**: Date formatting utilities
- **clsx**: Conditional className utility (wrapped in `cn` helper)

## Development Commands

```bash
# Development server with hot reload demo
npm run dev

# Build library for production (generates dist/ with ESM, CJS, and TypeScript declarations)
npm run build

# Lint code with ESLint
npm run lint

# Preview built library
npm run preview
```

## Component Implementation Guidelines

### Adding New Components
1. Create component directory in `src/components/`
2. Implement main component with CVA variants if applicable
3. Export from component `index.ts`
4. Add to main `src/index.ts` exports
5. Update demo in `src/App.tsx` if needed

### Styling Conventions
- Use Tailwind semantic tokens (e.g., `bg-primary`, `text-foreground`)
- Define component variants with CVA for consistent APIs
- Support dark mode through CSS variables
- Follow accessibility guidelines with proper focus states

### TypeScript Patterns
- Extend native HTML element props where appropriate
- Use `React.forwardRef` for components that need ref forwarding
- Export both component and props interface
- Use `VariantProps<typeof variants>` for CVA-based props

## Library Distribution

The build process generates:
- `dist/index.es.js` - ESM bundle
- `dist/index.cjs.js` - CommonJS bundle
- `dist/index.d.ts` - TypeScript declarations
- Component-specific declaration files

Package exports are configured for proper module resolution in modern bundlers and Node.js environments.

## Demo Application

`src/App.tsx` serves as both development environment and component showcase, demonstrating:
- All component variants and states
- Dark mode implementation
- Proper component usage patterns
- Interactive examples for testing

## Key Files

- `src/index.ts` - Main library entry point
- `src/utils/cn.ts` - Utility for conditional classes
- `vite.config.ts` - Library build configuration
- `tailwind.config.js` - Theme and styling system
- `src/index.css` - CSS variables and base styles