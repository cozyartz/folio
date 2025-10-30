<div align="center">

# 🎨 Andrea Cozart-Lundin | Portfolio

[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat&logo=cloudflare&logoColor=white)](https://andreacozart.me)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**[Live Demo](https://andreacozart.me)** • **[Devpost](https://devpost.com/cozyartz)** • **[GitHub](https://github.com/cozyartz)**

A modern, responsive portfolio website showcasing Andrea Cozart-Lundin's work as a Full Stack Developer & Creative Technologist. Built with cutting-edge web technologies and featuring dynamic GitHub integration.

</div>

---

## 👋 About Me

I'm Andrea Cozart-Lundin—developer, builder, and tech entrepreneur dedicated to designing scalable, inclusive digital solutions. As Co-Founder of **AutiMind, Inc.**, I lead platform and product development at the intersection of AI, blockchain, and modern full-stack engineering. At **Cozyartz Media Group**, I serve as CTO and multimedia developer, helping brands stand out with custom web experiences.

**Connect with me:**
- 🏆 [Devpost Portfolio](https://devpost.com/cozyartz) - Hackathon projects and achievements
- 💼 [GitHub](https://github.com/cozyartz) - Open source contributions
- 🌐 [Portfolio Website](https://andreacozart.me) - Full project showcase
- 🔗 [Links Hub](https://link.andreacozart.me) - All my professional links

## ✨ Features

- **Dynamic GitHub Stats**: Real-time repository statistics powered by Cloudflare Workers
- **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- **Modern UI/UX**: Glass morphism effects, smooth animations, and gradient accents
- **Performance Optimized**: Built with Vite for lightning-fast load times and code splitting
- **TypeScript**: Full type safety throughout the application
- **Component Architecture**: Modular, reusable React components with lazy loading
- **SEO Optimized**: Schema markup, meta tags, and semantic HTML for search engines
- **Content Protection**: Right-click protection and watermarking for portfolio content

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

### Cloudflare Pages Deployment

This portfolio is optimized for deployment on Cloudflare Pages with global edge distribution:

1. **Connect to Cloudflare Pages**:
   - Link your GitHub repository to Cloudflare Pages
   - Configure build settings:
     - Build command: `npm run build`
     - Build output directory: `dist`
     - Root directory: `/`

2. **Environment Variables** (if needed):
   - `GITHUB_TOKEN` - For GitHub API integration (optional)
   - Set in Cloudflare Pages dashboard under Settings > Environment variables

3. **Automatic Deployments**:
   - Production: Deploys automatically on push to `main` branch
   - Preview: Deploys automatically for all pull requests
   - Build time: ~1-2 minutes
   - Global CDN: Sub-100ms response times worldwide

4. **Custom Domain Setup**:
   - Add custom domain in Cloudflare Pages settings
   - DNS automatically configured through Cloudflare
   - Free SSL/TLS certificates included

### Manual Deployment
```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages (if using Wrangler)
npx wrangler pages deploy dist

# Or use the Cloudflare dashboard to upload the dist/ folder
```

### Cloudflare Workers (Optional)
For GitHub stats integration:
```bash
# Deploy GitHub stats worker
npm run worker:deploy
```

## 🚀 Featured Projects

This portfolio showcases a diverse range of projects across multiple domains:

### SaaS Ventures
- **[AstroLMS](https://astrolms.com)** - AI-powered Learning Management System targeting $350B market
- **[ZServed](https://zserved.com)** - Edge-native legal tech platform with blockchain verification
- **[TechFlunky](https://techflunky.com)** - AI-powered business marketplace with 94% validation accuracy

### Web Applications & Platforms
- **[Michigan Spots](https://michiganspots.com)** - Community treasure hunt game built on Reddit Devvit
- **[EtchNFT](https://etchnft.com)** - Phygital collectibles platform (physical + NFT)
- **[Cozyartz Media Group](https://cozyartzmedia.com)** - Creative technology services

### Technical Highlights
- Multi-tenant SaaS architectures
- AI/ML integration (Claude, GPT, Llama)
- Blockchain and Web3 development
- Edge computing with Cloudflare Workers
- Modern React and TypeScript applications

## 📱 Portfolio Sections

### Responsive Sections
- **Hero**: Professional introduction with smooth scroll navigation and social links
- **Education**: Academic background and professional experience
- **Projects**: SaaS ventures and portfolio projects showcase
- **Skills**: Technical expertise visualization with proficiency levels
- **Tools**: Development stack and technologies
- **Contact**: Multiple communication channels with contact form

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

### How to Contribute
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📧 Connect With Me

**Andrea Cozart-Lundin** - Full Stack Developer & Creative Technologist

- 🌐 Website: [andreacozart.me](https://andreacozart.me)
- 💼 GitHub: [@cozyartz](https://github.com/cozyartz)
- 🏆 Devpost: [cozyartz](https://devpost.com/cozyartz)
- 🔗 Links: [link.andreacozart.me](https://link.andreacozart.me)
- 💡 Co-Founder: [AutiMind, Inc.](https://autimind.com)
- 🎨 CTO: [Cozyartz Media Group](https://cozyartzmedia.com)

---

<div align="center">

### 🌟 Star this repo if you find it helpful!

**Built with ❤️ using React, TypeScript, Vite, and Tailwind CSS**

[![Deploy to Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-F38020?style=for-the-badge&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

</div>