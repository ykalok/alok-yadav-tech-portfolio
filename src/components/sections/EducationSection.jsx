import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card } from '../ui/card';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const EducationSection = ({ education }) => {
  return (
    <section id="education" className="py-32 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-tr from-emerald-500/5 to-transparent rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <SectionTitle title="Education" subtitle="Academic foundation in Computer Science" />
        </FadeInWhenVisible>

        <div className="space-y-6">
          {education.map((edu, index) => (
            <FadeInWhenVisible key={edu.id} delay={index * 150}>
              <Card className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-xl group">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.startDate} - {edu.endDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
