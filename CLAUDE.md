# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The site showcases Andrea Cozart-Lundin's projects and skills as a Full Stack Developer & Creative Technologist.

## Commands

### Development
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint to check code quality

### Package Management
- `npm install` - Install dependencies

## Architecture

### Tech Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom gradients and animations
- **Icons**: Lucide React
- **Linting**: ESLint with TypeScript and React plugins

### Project Structure
- `src/App.tsx` - Main application component that renders all sections
- `src/main.tsx` - React app entry point with StrictMode
- `src/components/` - Reusable React components:
  - `Hero.tsx` - Hero section with profile info, GitHub stats, and navigation
  - `ProjectCard.tsx` - Reusable card component for displaying project details
  - `ProjectsSection.tsx` - Projects showcase section
  - `SkillsSection.tsx` - Skills and technologies section
  - `ContactSection.tsx` - Contact information section

### Component Architecture
- All components are functional components using TypeScript interfaces for props
- Components follow a consistent pattern with proper TypeScript typing
- Hero component includes smooth scrolling navigation to other sections
- ProjectCard component accepts props for GitHub integration (stars, forks, language)

### Styling Approach
- Tailwind CSS with custom gradient backgrounds and animations
- Dark theme with slate-900 base and blue/emerald accent colors
- Responsive design with mobile-first approach
- Glass morphism effects using backdrop-blur and transparency
- Hover animations and transitions throughout

### Configuration
- Vite config optimizes lucide-react dependency exclusion
- ESLint configured with React hooks and TypeScript rules
- TypeScript project references for app and node configurations
- PostCSS and Autoprefixer for CSS processing

## Development Notes

### Styling Conventions
- Use Tailwind utility classes for consistent spacing and colors
- Gradient backgrounds: `from-blue-400 to-emerald-400` for accents
- Glass morphism: `bg-white/10 backdrop-blur-sm border border-white/20`
- Hover effects: `hover:transform hover:scale-105` for interactive elements

### Component Props
- ProjectCard expects GitHub-related props (stars, forks, language, lastUpdated)
- Hero component contains hardcoded portfolio URLs and GitHub username
- All external links use `target="_blank"` and `rel="noopener noreferrer"`