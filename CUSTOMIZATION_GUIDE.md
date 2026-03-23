# 🎨 Portfolio Customization Guide

This portfolio is fully config-driven. You can add, remove, reorder, and modify any feature by editing **3 files** — no need to touch component code for most changes.

---

## Architecture

```
src/
├── config/
│   ├── siteConfig.js        ← Controls what's visible & feature toggles
│   └── sectionRegistry.js   ← Maps section keys → React components
├── constants/
│   └── portfolioData.js     ← All your content/data lives here
├── components/
│   ├── sections/             ← One component per section
│   ├── layout/               ← Header (scroll spy) & Footer
│   ├── ui/                   ← Reusable UI primitives (Button, Card, etc.)
│   ├── common/               ← ScrollProgress, BackToTop, AnimatedCounter, SectionTitle
│   └── animations/           ← FadeInWhenVisible wrapper
├── hooks/                    ← useTypingEffect, useActiveSection, useCounter, etc.
└── pages/
    └── Portfolio.jsx         ← Main page (reads config, renders dynamically)
```

---

## Quick Recipes

### 1. Hide a section

Open `src/config/siteConfig.js`, set `enabled: false`:

```js
{ key: 'testimonials', enabled: false },
```

The component code stays intact — just hidden from rendering.

### 2. Reorder sections

Move entries in the `sections` array — render order matches array order:

```js
sections: [
  { key: 'hero',       enabled: true },
  { key: 'skills',     enabled: true },  // moved before about
  { key: 'about',      enabled: true },
  { key: 'experience', enabled: true },
  // ...
],
```

### 3. Toggle features

```js
features: {
  darkModeToggle: true,    // sun/moon theme toggle
  defaultDarkMode: true,   // start in dark mode
  header: true,            // sticky header with scroll spy
  footer: true,            // footer section
  smoothScroll: true,      // smooth scrolling
  resumeButton: true,      // resume button in header
  scrollProgress: true,    // gradient progress bar at top
  backToTop: true,         // floating back-to-top button
},
```

Set any to `false` to disable.

### 4. Edit personal info

Open `src/constants/portfolioData.js` and edit the `personal` object:

```js
personal: {
  name: 'Your Name',
  title: 'Your Title',
  tagline: 'Your tagline here',
  email: 'you@example.com',
  location: 'Your City, Country',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  resumeUrl: '/resume.pdf',
  bio: 'Your bio...',
  yearsOfExperience: 5,
  projectsCompleted: 10,
  companiesWorked: 3,
  transactionsProcessed: '1M+',
},
```

### 5. Add a new experience

Copy an existing entry in the `experience` array, bump the `id`:

```js
{
  id: 3,
  company: 'New Company',
  position: 'Senior Engineer',
  location: 'Bangalore, India',
  startDate: 'Jan 2025',
  endDate: 'Present',
  current: true,
  responsibilities: [
    'Built something amazing',
    'Led a team of 5 engineers',
  ],
  technologies: ['Go', 'Kubernetes', 'AWS'],
},
```

### 6. Add a new project

```js
{
  id: 5,
  title: 'My New Project',
  description: 'What it does...',
  technologies: ['React', 'Node.js', 'PostgreSQL'],
  highlights: [
    'Feature 1',
    'Feature 2',
  ],
  metrics: {
    impact: '30% performance improvement',
    scale: '10K+ daily users',
  },
},
```

Projects are filterable by technology — new tech tags appear automatically in the filter bar.

### 7. Add a new skill category

In `portfolioData.js`, add a new key under `skills`:

```js
skills: {
  // ...existing categories
  devops: [
    { name: 'Docker', level: 85 },
    { name: 'Kubernetes', level: 70 },
    { name: 'AWS', level: 80 },
  ],
},
```

Then in `src/components/sections/SkillsSection.jsx`, add to `skillCategories`:

```js
{ key: 'devops', label: 'DevOps', data: skills.devops },
```

The tab, count badge, and animated bars are generated automatically.

### 8. Add/remove nav links

In `src/config/siteConfig.js`:

```js
navItems: [
  { label: 'About',      href: '#about' },
  { label: 'Experience',  href: '#experience' },
  { label: 'Education',   href: '#education' },
  { label: 'Skills',      href: '#skills' },
  { label: 'Projects',    href: '#projects' },
  { label: 'Blog',        href: '#blog' },       // new
  { label: 'Contact',     href: '#contact' },
],
```

Scroll spy highlighting works automatically for any `href` that matches a section `id`.

### 9. Change the hero typing texts

In `src/components/sections/HeroSection.jsx`, edit the `typingTexts` array:

```js
const typingTexts = [
  data.title,
  'Your Second Title',
  'Your Third Title',
];
```

### 10. Add a new education entry

```js
education: [
  {
    id: 1,
    institution: 'Your University',
    degree: 'M.Tech in Computer Science',
    location: 'City, Country',
    startDate: 'Aug 2020',
    endDate: 'June 2022',
  },
  // ...existing
],
```

### 11. Add a new achievement

```js
{
  id: 5,
  title: 'Your Achievement',
  description: 'What you accomplished',
  icon: 'Award',  // must match a key in AchievementsSection's iconMap
},
```

Available icons: `TrendingUp`, `Zap`, `Target`, `Shield`. To add more, import from `lucide-react` and add to the `iconMap` in `AchievementsSection.jsx`.

### 12. Add a new testimonial

```js
{
  id: 3,
  name: 'John Doe',
  role: 'CTO',
  company: 'TechCorp',
  content: 'What they said about you...',
  avatar: 'JD',  // initials shown in avatar circle
},
```

---

## Adding a Brand New Section

This is the only case where you write new component code. 4 steps:

### Step 1: Create the component

Create `src/components/sections/BlogSection.jsx`:

```jsx
import React from 'react';
import { Card } from '../ui/card';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const BlogSection = ({ posts }) => {
  return (
    <section id="blog" className="py-32 px-6 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <SectionTitle title="Blog" subtitle="My latest writings" />
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <FadeInWhenVisible key={post.id}>
              <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-500 transition-all hover:shadow-xl">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{post.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2">{post.summary}</p>
                <a href={post.url} target="_blank" rel="noopener noreferrer"
                   className="text-emerald-500 hover:text-emerald-400 mt-4 inline-block font-semibold">
                  Read More →
                </a>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
```

### Step 2: Add data in `portfolioData.js`

```js
blog: [
  { id: 1, title: 'My First Post', summary: 'About distributed systems...', url: 'https://...' },
  { id: 2, title: 'Kafka Deep Dive', summary: 'Event-driven architecture...', url: 'https://...' },
],
```

### Step 3: Register in `sectionRegistry.js`

```js
import BlogSection from '../components/sections/BlogSection';

// add to the registry object:
blog: {
  component: BlogSection,
  getProps: (data) => ({ posts: data.blog }),
},
```

### Step 4: Enable in `siteConfig.js`

```js
sections: [
  // ...existing
  { key: 'blog', enabled: true },
],

navItems: [
  // ...existing
  { label: 'Blog', href: '#blog' },
],
```

Done! Your new section renders in the position you placed it, with scroll spy and all animations working automatically.

---

## File Reference

| File | What it controls |
|------|-----------------|
| `src/config/siteConfig.js` | Feature toggles, section order, nav items |
| `src/config/sectionRegistry.js` | Maps section keys → components + data binding |
| `src/constants/portfolioData.js` | All portfolio content (personal, experience, skills, projects, etc.) |
| `src/pages/Portfolio.jsx` | Main page renderer — rarely needs editing |
| `src/components/sections/*` | Individual section components |
| `src/components/layout/Header.jsx` | Sticky header with scroll spy navigation |
| `src/components/layout/Footer.jsx` | Footer with social links |
| `src/components/common/ScrollProgress.jsx` | Top scroll progress bar |
| `src/components/common/BackToTop.jsx` | Floating back-to-top button |
| `src/components/ui/*` | Shadcn-style UI primitives (Button, Card, Badge, etc.) |
| `src/hooks/*` | Custom hooks (typing effect, scroll spy, counters, intersection observer) |
| `src/index.css` | Tailwind config, CSS variables, custom animations |

---

## Deployment

```bash
# Build for production
npm run build

# Output is in dist/ — deploy to any static host:
# Vercel, Netlify, GitHub Pages, AWS S3 + CloudFront, etc.
```

For GitHub Pages, add to `vite.config.js`:

```js
export default defineConfig({
  base: '/alok-yadav-tech-portfolio/',
  // ...rest of config
});
```
