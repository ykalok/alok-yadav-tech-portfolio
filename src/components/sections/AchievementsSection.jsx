
import React from 'react';
import { TrendingUp, Zap, Target, Shield } from 'lucide-react';
import { Card } from '../ui/card';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const AchievementsSection = ({ achievements }) => {
  const iconMap = {
    TrendingUp: TrendingUp,
    Zap: Zap,
    Target: Target,
    Shield: Shield
  };

  return (
    <section className="py-32 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <SectionTitle
            title="Key Achievements"
            subtitle="Delivering measurable impact through technical excellence"
          />
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon];
            return (
              <FadeInWhenVisible key={achievement.id} delay={index * 100}>
                <Card className="p-6 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-xl hover:scale-105 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {achievement.description}
                  </p>
                </Card>
              </FadeInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
