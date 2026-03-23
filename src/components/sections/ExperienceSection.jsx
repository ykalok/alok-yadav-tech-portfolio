import React, { useState } from 'react';
import { Briefcase, MapPin, Calendar, ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '../ui/card';
import { Button } from '../ui/button';
import { Badge } from '../ui/badge';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const ExperienceSection = ({ experiences }) => {
  const [expandedId, setExpandedId] = useState(experiences[0]?.id);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-32 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>

      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <SectionTitle
            title="Work Experience"
            subtitle="Building fintech infrastructure at scale"
          />
        </FadeInWhenVisible>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-emerald-500 hidden md:block"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <FadeInWhenVisible key={exp.id} delay={index * 150}>
                <div className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-6 top-8 w-5 h-5 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full border-4 border-white dark:border-slate-900 hidden md:block shadow-lg"></div>

                  <Card className="md:ml-20 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 overflow-hidden hover:shadow-xl group">
                    <div className="p-8">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                        <div className="flex-1">
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                            {exp.position}
                          </h3>
                          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                            <Briefcase className="h-5 w-5" />
                            <span className="text-lg">{exp.company}</span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-slate-600 dark:text-slate-400 text-sm">
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Calendar className="h-4 w-4" />
                              <span>{exp.startDate} - {exp.endDate}</span>
                            </div>
                          </div>
                        </div>
                        {exp.current && (
                          <span className="px-4 py-2 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white text-sm font-bold rounded-full self-start shadow-lg">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {exp.technologies?.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20 border border-emerald-500/20"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className={`transition-all duration-500 ${expandedId === exp.id ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                        <div className="border-l-2 border-emerald-500/30 pl-6 mb-6">
                          <ul className="space-y-4">
                            {exp.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex gap-3 text-slate-600 dark:text-slate-300 leading-relaxed"
                              >
                                <span className="text-emerald-500 mt-1.5 flex-shrink-0 font-bold">•</span>
                                <span>{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Button
                        onClick={() => toggleExpand(exp.id)}
                        variant="ghost"
                        className="text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 hover:bg-emerald-500/10 mt-2 font-semibold"
                      >
                        {expandedId === exp.id ? (
                          <>
                            <ChevronUp className="h-5 w-5 mr-2" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-5 w-5 mr-2" />
                            Show Details
                          </>
                        )}
                      </Button>
                    </div>
                  </Card>
                </div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

