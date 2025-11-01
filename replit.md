# Code Cloud Systems - Digital Solutions Platform

## Overview

Code Cloud Systems is a modern, visually striking marketing website for a digital solutions company. The application showcases the company's services, technologies, and portfolio through an immersive single-page experience featuring 3D animations, smooth scrolling, and a dark-themed aesthetic inspired by modern tech agencies.

The project is built as a full-stack web application with a React frontend featuring Three.js 3D visualizations, shadcn/ui components, and a minimalist Express backend with in-memory data storage ready for database integration.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server for fast hot module replacement
- **Wouter** for lightweight client-side routing (currently single-page application)
- **Path aliases** configured for clean imports (@/, @shared/, @assets/)

**UI Component System**
- **shadcn/ui** component library with Radix UI primitives providing accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom design tokens
- **New York style variant** of shadcn/ui components
- **Dark theme by default** with light theme support via CSS custom properties
- Custom color system using HSL values for consistent theming

**3D Graphics & Animations**
- **React Three Fiber** (@react-three/fiber) - React renderer for Three.js
- **Drei** (@react-three/drei) - helper library providing pre-built 3D components and materials
- **Canvas-based neural network visualization** for hero section background
- **Animated 3D shapes** (cubes, spheres, torus) using wobble and distortion materials
- **Particle systems** for ambient effects

**State Management**
- **TanStack Query** (@tanstack/react-query) for server state management and data fetching
- **React Hook Form** with Zod validation for form handling (configured but not actively used)
- Local component state with React hooks

**Design System**
- Typography: Inter and Outfit fonts from Google Fonts
- Dark-first color palette with cyan/electric blue (#0EA5E9) as primary accent
- Consistent spacing using Tailwind's spacing scale (4, 8, 12, 16, 20, 24, 32)
- Hover effects using custom CSS classes (hover-elevate, active-elevate-2)
- Responsive breakpoints following Tailwind's default system

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript for type-safe API development
- **Custom Vite middleware** integration for development with HMR support
- **Request logging middleware** that captures method, path, status, duration, and response body
- Production build uses esbuild for server bundling

**Storage Layer**
- **In-memory storage** (MemStorage class) implementing IStorage interface
- Storage interface designed for CRUD operations on User entities
- Currently stores users in a Map with UUID primary keys
- **Ready for database migration** - storage interface can be swapped with database implementation

**Development Tools**
- **Replit-specific plugins** for runtime error overlays, cartographer, and dev banner
- **TypeScript strict mode** enabled for maximum type safety
- **Path resolution** configured for shared types and assets

### Data Schema

**Database Configuration (Drizzle ORM)**
- **Drizzle Kit** configured for PostgreSQL migrations
- Schema defined in `shared/schema.ts` for code sharing between client and server
- **Users table** with UUID primary key, unique username, and password fields
- **Zod schemas** generated from Drizzle tables for runtime validation
- Migration output directory: `./migrations`
- **Database not yet provisioned** - schema ready but DATABASE_URL must be set

**Type Safety**
- Shared types between frontend and backend via `@shared` alias
- Drizzle inferred types for database entities
- Zod schemas for validation at API boundaries

### External Dependencies

**UI & Styling**
- **Radix UI primitives** - comprehensive set of unstyled, accessible components (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, hover-card, label, menubar, navigation-menu, popover, progress, radio-group, scroll-area, select, separator, slider, switch, tabs, toast, toggle, tooltip)
- **Tailwind CSS** with PostCSS and Autoprefixer
- **class-variance-authority** for type-safe component variant styling
- **clsx** and **tailwind-merge** for className composition
- **cmdk** for command palette functionality

**3D Graphics**
- **Three.js** (via React Three Fiber) - WebGL 3D library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - useful helpers and abstractions for R3F

**Forms & Validation**
- **React Hook Form** for performant form state management
- **@hookform/resolvers** for validation schema integration
- **Zod** for runtime type checking and schema validation
- **date-fns** for date manipulation

**Data Fetching**
- **TanStack Query** (@tanstack/react-query) for asynchronous state management

**Icons**
- **Lucide React** - consistent icon set
- **React Icons** (specifically Simple Icons for brand logos like WhatsApp)

**Database & ORM** (configured but not active)
- **Drizzle ORM** - TypeScript ORM for SQL databases
- **@neondatabase/serverless** - Neon PostgreSQL serverless driver
- **connect-pg-simple** - PostgreSQL session store for Express
- **drizzle-zod** - Zod schema generation from Drizzle schemas

**Development**
- **Vite plugins** - React, runtime error overlay, Replit-specific tools
- **tsx** for running TypeScript files directly in development
- **esbuild** for production server bundling
- **TypeScript** with strict mode and path aliases

**Session Management** (infrastructure present)
- **express-session** ready for integration with PostgreSQL session store

**Routing**
- **Wouter** - minimal client-side router (1-2kb)

**Content & Assets**
- Company logo stored in `attached_assets` directory
- Design guidelines document specifying visual approach
- Mock data for team members, projects, technologies, and markets