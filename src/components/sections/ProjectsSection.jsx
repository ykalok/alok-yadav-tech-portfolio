import React, { useState, useMemo } from 'react';
import { ExternalLink, ChevronRight, BarChart3, Activity, Filter, X } from 'lucide-react';
import { Card } from '../ui/card';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const ProjectsSection = ({ projects }) => {
  const [hoveredId, setHoveredId] = useState(null);
  const [activeTech, setActiveTech] = useState(null);
  const [expandedId, setExpandedId] = useState(null);

  const allTechs = useMemo(() => {
    const set = new Set();
    projects.forEach((p) => p.technologies.forEach((t) => set.add(t)));
    return [...set];
  }, [projects]);

  const filtered = activeTech
    ? projects.filter((p) => p.technologies.includes(activeTech))
    : projects;

  return (
    <section id="projects" className="py-32 px-6 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-6xl mx-auto">
        <FadeInWhenVisible>
          <SectionTitle title="Featured Projects" subtitle="High-impact fintech solutions deployed at scale" />
        </FadeInWhenVisible>

        {/* Tech filter */}
        <FadeInWhenVisible delay={100}>
          <div className="flex flex-wrap items-center gap-2 mb-10">
            <Filter className="h-4 w-4 text-slate-500 dark:text-slate-400" />
            <button
              onClick={() => setActiveTech(null)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                !activeTech
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
              }`}
            >
              All
            </button>
            {allTechs.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(activeTech === tech ? null : tech)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeTech === tech
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700 hover:border-emerald-500'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, index) => (
            <FadeInWhenVisible key={project.id} delay={index * 150}>
              <Card
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="p-8 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-2xl cursor-pointer group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 transition-opacity duration-300 ${hoveredId === project.id ? 'opacity-100' : 'opacity-0'}`} />

                <div className="relative z-10">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white pr-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <ExternalLink
                      className={`h-6 w-6 flex-shrink-0 transition-all duration-300 ${
                        hoveredId === project.id
                          ? 'text-emerald-500 dark:text-emerald-400 translate-x-1 -translate-y-1'
                          : 'text-slate-400 dark:text-slate-600'
                      }`}
                    />
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {project.metrics && (
                    <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-700">
                      <div className="flex items-start gap-2">
                        <BarChart3 className="h-5 w-5 text-emerald-500 mt-0.5" />
                        <div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Impact</div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{project.metrics.impact}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <Activity className="h-5 w-5 text-cyan-500 mt-0.5" />
                        <div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1">Scale</div>
                          <div className="text-sm font-semibold text-slate-900 dark:text-white">{project.metrics.scale}</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Expandable highlights */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      expandedId === project.id ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <h4 className="text-sm font-bold text-slate-700 dark:text-slate-400 mb-3 uppercase tracking-wide">
                      Key Highlights
                    </h4>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-slate-600 dark:text-slate-400">
                          <ChevronRight className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 text-emerald-600 dark:text-emerald-400 hover:from-emerald-500/20 hover:to-cyan-500/20 border border-emerald-500/20 font-medium"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(expandedId === project.id ? null : project.id);
                      }}
                      className="text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/10 ml-2 flex-shrink-0"
                    >
                      {expandedId === project.id ? (
                        <><X className="h-4 w-4 mr-1" /> Less</>
                      ) : (
                        <><ChevronRight className="h-4 w-4 mr-1" /> More</>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-500 dark:text-slate-400">
            No projects found with <span className="font-semibold text-emerald-500">{activeTech}</span>.
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
