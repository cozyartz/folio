# 🎨 Portfolio Website

A modern, responsive portfolio website showcasing Andrea Cozart-Lundin's work as a Full Stack Developer & Creative Technologist. Built with cutting-edge web technologies and featuring dynamic GitHub integration.

## ✨ Features

- **Dynamic GitHub Stats**: Real-time repository statistics powered by Cloudflare Workers
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Modern UI/UX**: Glass morphism effects, smooth animations, and gradient accents
- **Performance Optimized**: Built with Vite for lightning-fast load times
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable React components

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Lucide React** - Beautiful, customizable icons

### Build & Development
- **Vite** - Next-generation frontend tooling
- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS processing and optimization

### Infrastructure
- **Cloudflare Workers** - Serverless functions for GitHub API integration
- **Wrangler** - Cloudflare Workers CLI for deployment

## 🎯 Project Structure

```
src/
├── components/           # Reusable React components
│   ├── Hero.tsx         # Hero section with navigation
│   ├── ProjectCard.tsx  # Project showcase cards
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ToolsSection.tsx
│   ├── EducationSection.tsx
│   └── ContactSection.tsx
├── worker/              # Cloudflare Workers
│   ├── github-stats.ts  # GitHub API integration
│   └── types.d.ts
├── App.tsx              # Main application component
└── main.tsx             # Application entry point
```

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/cozyartz/folio.git
cd folio

# Install dependencies
npm install
```

### Available Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Cloudflare Workers commands
npm run worker:dev      # Local development
npm run worker:deploy   # Deploy to Cloudflare
npm run worker:tail     # View logs
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue to Emerald gradients (`from-blue-400 to-emerald-400`)
- **Background**: Dark slate (`slate-900`)
- **Glass Elements**: Semi-transparent white with backdrop blur
- **Text**: High contrast white and gray variants

### Typography
- Clean, modern font stack optimized for readability
- Responsive text sizing with mobile-first approach

### Components
- **Glass Morphism**: Subtle transparency effects with `backdrop-blur`
- **Hover Animations**: Smooth scale and color transitions
- **Responsive Grid**: Flexible layouts that adapt to screen size

## 🚀 Deployment

The site is configured for deployment with:
- **Cloudflare Pages** for static hosting
- **Cloudflare Workers** for serverless API functions
- **GitHub Actions** for automated CI/CD

## 📱 Features Showcase

### Dynamic GitHub Integration
- Real-time repository statistics
- Language distribution charts
- Contribution activity

### Responsive Sections
- **Hero**: Professional introduction with smooth scroll navigation
- **Projects**: Filterable portfolio showcase
- **Skills**: Technical expertise visualization
- **Tools**: Development stack overview
- **Education**: Academic and professional background
- **Contact**: Multiple communication channels

## 🔧 Configuration

### Environment Variables
```bash
# For GitHub integration
GITHUB_TOKEN=your_github_token
```

### Cloudflare Workers Setup
1. Configure `wrangler.toml` with your account details
2. Set up GitHub token in Cloudflare dashboard
3. Deploy with `npm run worker:deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/cozyartz/folio/issues).

## 📧 Contact

Andrea Cozart-Lundin - [GitHub](https://github.com/cozyartz)

---

<div align="center">
  <strong>Built with ❤️ using React, TypeScript, and Tailwind CSS</strong>
</div>