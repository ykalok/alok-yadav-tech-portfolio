// ============================================================
// SITE CONFIGURATION
// ============================================================
// This is the single control center for your portfolio.
// Modify this file to enable/disable features, reorder sections,
// and configure site-wide settings.
//
// HOW TO USE:
// - Toggle sections: set enabled to true/false
// - Reorder sections: change the order in the array
// - Add new sections: add a new entry here + register in sectionRegistry.js
// - Toggle features: flip the booleans under `features`
// ============================================================

const siteConfig = {
  meta: {
    title: 'Alok Yadav - Software Development Engineer',
    description: 'Portfolio of Alok Yadav, SDE specializing in fintech platforms.',
    favicon: '/favicon.svg',
  },

  features: {
    darkModeToggle: true,
    defaultDarkMode: true,
    header: true,
    footer: true,
    smoothScroll: true,
    resumeButton: true,
    scrollProgress: true,   // Gradient progress bar at top of page
    backToTop: true,         // Floating back-to-top button
  },

  // Sections — order here = render order on page
  sections: [
    { key: 'hero',          enabled: true },
    { key: 'about',         enabled: true },
    { key: 'achievements',  enabled: true },
    { key: 'experience',    enabled: true },
    { key: 'education',     enabled: true },
    { key: 'skills',        enabled: true },
    { key: 'projects',      enabled: true },
    { key: 'testimonials',  enabled: true },
    { key: 'contact',       enabled: true },
  ],

  navItems: [
    { label: 'About',      href: '#about' },
    { label: 'Experience',  href: '#experience' },
    { label: 'Education',   href: '#education' },
    { label: 'Skills',      href: '#skills' },
    { label: 'Projects',    href: '#projects' },
    { label: 'Contact',     href: '#contact' },
  ],
};

export default siteConfig;
