import React, { useState, useEffect } from 'react';
import { portfolioData } from '../constants/portfolioData';
import siteConfig from '../config/siteConfig';
import sectionRegistry from '../config/sectionRegistry';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ScrollProgress from '../components/common/ScrollProgress';
import BackToTop from '../components/common/BackToTop';
import { Moon, Sun } from 'lucide-react';
import { Button } from '../components/ui/button';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(siteConfig.features.defaultDarkMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const enabledSections = siteConfig.sections.filter((s) => s.enabled);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      {siteConfig.features.scrollProgress && <ScrollProgress />}

      {siteConfig.features.darkModeToggle && (
        <div className="fixed top-6 right-6 z-50">
          <Button
            onClick={() => setDarkMode(!darkMode)}
            variant="outline"
            size="icon"
            className="rounded-full bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-110 transition-all duration-300 shadow-lg"
            aria-label="Toggle theme"
          >
            {darkMode ? (
              <Sun className="h-5 w-5 text-emerald-500" />
            ) : (
              <Moon className="h-5 w-5 text-slate-700" />
            )}
          </Button>
        </div>
      )}

      {siteConfig.features.header && (
        <Header
          data={portfolioData.personal}
          navItems={siteConfig.navItems}
          showResume={siteConfig.features.resumeButton}
        />
      )}

      {enabledSections.map(({ key }) => {
        const entry = sectionRegistry[key];
        if (!entry) return null;
        const SectionComponent = entry.component;
        const props = entry.getProps(portfolioData);
        return <SectionComponent key={key} {...props} />;
      })}

      {siteConfig.features.footer && <Footer data={portfolioData.personal} />}
      {siteConfig.features.backToTop && <BackToTop />}
    </div>
  );
};

export default Portfolio;
