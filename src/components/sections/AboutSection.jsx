
import React from 'react';
import { Briefcase, Award, Users, TrendingUp } from 'lucide-react';
import { Card } from '../ui/card';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import AnimatedCounter from '../common/AnimatedCounter';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const AboutSection = ({ data }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  const stats = [
    {
      icon: <Briefcase className="h-8 w-8" />,
      value: data.yearsOfExperience,
      suffix: '+',
      label: 'Years Experience',
      color: 'emerald'
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: data.projectsCompleted,
      suffix: '+',
      label: 'Projects Completed',
      color: 'cyan'
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: data.companiesWorked,
      suffix: '',
      label: 'Companies Worked',
      color: 'emerald'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: 10,
      suffix: 'M+',
      label: 'Transactions Processed',
      color: 'cyan'
    }
  ];

  return (
    <section id="about" className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <SectionTitle
            title="About Me"
            subtitle="Passionate about building scalable, high-performance financial systems"
          />
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-16 items-start" ref={ref}>
          <FadeInWhenVisible delay={200}>
            <div>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
                {data.bio}
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-lg font-medium border border-emerald-500/20">
                  Fintech Expert
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-lg font-medium border border-cyan-500/20">
                  Microservices
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-lg font-medium border border-emerald-500/20">
                  Distributed Systems
                </span>
              </div>
            </div>
          </FadeInWhenVisible>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <FadeInWhenVisible key={index} delay={300 + index * 100}>
                <Card
                  className={`p-6 bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 hover:border-${stat.color}-500 dark:hover:border-${stat.color}-400 transition-all duration-300 hover:shadow-xl hover:scale-105 group`}
                >
                  <div className={`text-${stat.color}-500 dark:text-${stat.color}-400 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      isVisible={isVisible}
                      duration={2000}
                    />
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
