import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import AchievementsSection from '../components/sections/AchievementsSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';
import EducationSection from '../components/sections/EducationSection';

// ============================================================
// SECTION REGISTRY
// ============================================================
// Maps section keys to their components and data-binding logic.
//
// HOW TO ADD A NEW SECTION:
// 1. Create your component in src/components/sections/
// 2. Import it above
// 3. Add an entry below with:
//    - component: your React component
//    - getProps: function that receives portfolioData and returns props
// 4. Add the section key to `sections` array in siteConfig.js
// 5. Add corresponding data in portfolioData.js if needed
// ============================================================

const sectionRegistry = {
  hero: {
    component: HeroSection,
    getProps: (data) => ({ data: data.personal }),
  },
  about: {
    component: AboutSection,
    getProps: (data) => ({ data: data.personal }),
  },
  achievements: {
    component: AchievementsSection,
    getProps: (data) => ({ achievements: data.achievements }),
  },
  experience: {
    component: ExperienceSection,
    getProps: (data) => ({ experiences: data.experience }),
  },
  education: {
    component: EducationSection,
    getProps: (data) => ({ education: data.education }),
  },
  skills: {
    component: SkillsSection,
    getProps: (data) => ({ skills: data.skills }),
  },
  projects: {
    component: ProjectsSection,
    getProps: (data) => ({ projects: data.projects }),
  },
  testimonials: {
    component: TestimonialsSection,
    getProps: (data) => ({ testimonials: data.testimonials }),
  },
  contact: {
    component: ContactSection,
    getProps: (data) => ({ data: data.personal }),
  },
};

export default sectionRegistry;
