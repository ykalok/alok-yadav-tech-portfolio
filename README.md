# 🚀 Alok Yadav — Tech Portfolio

A modern, config-driven developer portfolio built with React 19, Tailwind CSS 4, and Vite. Fully interactive with dark mode, scroll animations, typing effects, and a modular architecture that lets you add or remove any feature without touching component code.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8-646cff?logo=vite)
![License](https://img.shields.io/badge/License-MIT-green)

---

## ✨ Features

### Interactive & Animated
- **Typing Effect** — Auto-rotating titles in the hero section
- **Floating Particles** — Ambient particle animation in the background
- **Scroll-Triggered Animations** — Sections fade in as you scroll
- **Animated Skill Bars** — Progress bars fill on viewport entry
- **Animated Counters** — Stats count up when visible
- **Scroll Progress Bar** — Gradient indicator at the top of the page
- **Scroll Spy Navigation** — Active nav link highlights as you scroll
- **Expandable Cards** — Experience & project details expand/collapse
- **Project Tech Filter** — Filter projects by technology stack
- **Copy to Clipboard** — One-click email copy in contact section
- **Back to Top** — Floating button appears on scroll

### Design & UX
- **Dark / Light Mode** — Toggle with smooth transitions, persists default
- **Fully Responsive** — Mobile-first, works on all screen sizes
- **Animated Mobile Menu** — Smooth slide-in/out on mobile
- **Emerald-Cyan Gradient Theme** — Professional color palette
- **Inter Font** — Clean, modern typography

### Config-Driven Architecture
- **3-File Customization** — Change content, toggle features, reorder sections — all from config files
- **Section Registry** — Add new sections without modifying the main page
- **Feature Flags** — Enable/disable dark mode toggle, header, footer, scroll progress, back-to-top, resume button
- **Zero Hardcoding** — Nav items, section order, and all content are data-driven

---

## 📸 Sections

| Section | Description |
|---------|-------------|
| **Hero** | Name, typing titles, availability badge, quick stats, social links |
| **About** | Bio, expertise tags, animated stat counters |
| **Achievements** | Key accomplishments with icon cards |
| **Experience** | Interactive timeline with expandable responsibilities |
| **Education** | Academic background with institution details |
| **Skills** | 9 tabbed categories (Languages, Frameworks, Databases, Messaging, Infrastructure, Architecture, Security, Monitoring, GenAI) with animated progress bars |
| **Projects** | Filterable project cards with metrics, expandable highlights |
| **Testimonials** | Professional recommendations with avatars |
| **Contact** | Contact form with character counter, copy-to-clipboard email, social links |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 |
| Build Tool | Vite 8 |
| Styling | Tailwind CSS 4 |
| UI Components | Radix UI + custom Shadcn-style primitives |
| Icons | Lucide React |
| Routing | React Router 7 |
| Animations | CSS transitions + Intersection Observer |

---

## 📁 Project Structure

```
src/
├── config/
│   ├── siteConfig.js           # Feature toggles, section order, nav items
│   └── sectionRegistry.js      # Maps section keys → components + props
├── constants/
│   └── portfolioData.js        # All portfolio content (edit this!)
├── pages/
│   └── Portfolio.jsx           # Main page — renders sections from config
├── components/
│   ├── sections/               # One component per section
│   │   ├── HeroSection.jsx
│   │   ├── AboutSection.jsx
│   │   ├── AchievementsSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── EducationSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── TestimonialsSection.jsx
│   │   └── ContactSection.jsx
│   ├── layout/
│   │   ├── Header.jsx          # Sticky header with scroll spy
│   │   └── Footer.jsx
│   ├── common/
│   │   ├── ScrollProgress.jsx  # Top progress bar
│   │   ├── BackToTop.jsx       # Floating scroll-to-top button
│   │   ├── AnimatedCounter.jsx
│   │   └── SectionTitle.jsx
│   ├── animations/
│   │   └── FadeInWhenVisible.jsx
│   └── ui/                     # Shadcn-style primitives
│       ├── button.jsx
│       ├── card.jsx
│       ├── badge.jsx
│       ├── tabs.jsx
│       ├── input.jsx
│       ├── textarea.jsx
│       ├── avatar.jsx
│       └── toaster.jsx
├── hooks/
│   ├── useTypingEffect.js      # Typing animation
│   ├── useActiveSection.js     # Scroll spy
│   ├── useIntersectionObserver.js
│   ├── useCounter.js
│   └── use-toast.js
├── lib/
│   └── utils.js                # cn() utility for Tailwind class merging
├── App.jsx
├── main.jsx
└── index.css                   # Tailwind config + custom animations
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repo
git clone https://github.com/ykalok/alok-yadav-tech-portfolio.git
cd alok-yadav-tech-portfolio

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ⚙️ Customization

This portfolio is designed to be customized entirely through config files. See [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) for detailed recipes.

### Quick Overview

| What you want to do | File to edit |
|---------------------|-------------|
| Change your name, bio, links | `src/constants/portfolioData.js` |
| Add/remove/reorder sections | `src/config/siteConfig.js` |
| Toggle dark mode, header, footer | `src/config/siteConfig.js` → `features` |
| Add a brand new section | Create component → register in `sectionRegistry.js` → enable in `siteConfig.js` |
| Change nav links | `src/config/siteConfig.js` → `navItems` |

---

## 📄 License

MIT © 2025 Alok Yadav

---

Built with ❤️ using React, Tailwind CSS, and Vite
