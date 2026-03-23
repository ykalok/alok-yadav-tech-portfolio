
import React from 'react';
import { Quote } from 'lucide-react';
import { Card } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import SectionTitle from '../common/SectionTitle';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';

const TestimonialsSection = ({ testimonials }) => {
  return (
    <section className="py-32 px-6 bg-white dark:bg-slate-950 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <FadeInWhenVisible>
          <SectionTitle
            title="Testimonials"
            subtitle="What colleagues and managers say about working with me"
          />
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeInWhenVisible key={testimonial.id} delay={index * 150}>
              <Card className="p-8 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 border-slate-200 dark:border-slate-700 hover:border-emerald-500 dark:hover:border-emerald-400 transition-all duration-300 hover:shadow-xl relative">
                <Quote className="absolute top-6 right-6 h-12 w-12 text-emerald-500/10 dark:text-emerald-500/20" />

                <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12 border-2 border-emerald-500">
                    <AvatarFallback className="bg-gradient-to-br from-emerald-500 to-cyan-500 text-white font-bold">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {testimonial.role}
                    </div>
                    <div className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                      {testimonial.company}
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

export default TestimonialsSection;
