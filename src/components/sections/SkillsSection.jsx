import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { Card } from '../ui/card';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const SkillBar = ({ name, level, isVisible, delay = 0 }) => (
  <Card className="p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group">
    <div className="flex justify-between items-center mb-4">
      <span className="font-bold text-slate-900 dark:text-white text-lg group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {name}
      </span>
      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-xl">
        {level}%
      </span>
    </div>
    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
      <div
        className="bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-600 h-full rounded-full transition-all ease-out shadow-lg"
        style={{
          width: isVisible ? `${level}%` : '0%',
          transitionDuration: '1.2s',
          transitionDelay: `${delay}ms`,
          boxShadow: isVisible ? '0 0 10px rgba(16, 185, 129, 0.5)' : 'none',
        }}
      />
    </div>
  </Card>
);

const SkillsSection = ({ skills }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const skillCategories = [
    { key: 'languages', label: 'Languages', data: skills.languages },
    { key: 'frameworks', label: 'Frameworks', data: skills.frameworks },
    { key: 'databases', label: 'Databases', data: skills.databases },
    { key: 'messaging', label: 'Messaging', data: skills.messaging },
    { key: 'infrastructure', label: 'Infrastructure', data: skills.infrastructure },
    { key: 'architecture', label: 'Architecture', data: skills.architecture },
    { key: 'security', label: 'Security', data: skills.security },
    { key: 'monitoring', label: 'Monitoring', data: skills.monitoring },
    { key: 'genai', label: 'GenAI', data: skills.genai },
  ];

  const totalSkills = skillCategories.reduce((sum, cat) => sum + (cat.data?.length || 0), 0);

  return (
    <section id="skills" className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-cyan-500/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10" ref={ref}>
        <FadeInWhenVisible>
          <SectionTitle
            title="Skills & Expertise"
            subtitle={`${totalSkills} technologies across ${skillCategories.length} categories`}
          />
        </FadeInWhenVisible>

        <Tabs defaultValue="languages" className="w-full">
          <TabsList className="flex flex-wrap justify-center gap-2 bg-slate-100 dark:bg-slate-900 p-2 rounded-xl mb-12 h-auto">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.key}
                value={category.key}
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-500 data-[state=active]:to-cyan-500 data-[state=active]:text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold hover:scale-105"
              >
                {category.label}
                <span className="ml-1.5 text-xs opacity-70">({category.data?.length || 0})</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.key} value={category.key} className="mt-0">
              <div className="grid md:grid-cols-2 gap-6">
                {category.data?.map((skill, index) => (
                  <FadeInWhenVisible key={index} delay={index * 50}>
                    <SkillBar
                      name={skill.name}
                      level={skill.level}
                      isVisible={isVisible}
                      delay={index * 100}
                    />
                  </FadeInWhenVisible>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
