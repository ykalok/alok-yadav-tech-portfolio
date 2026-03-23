import React, { useMemo } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Sparkles, Circle } from 'lucide-react';
import { Button } from '../ui/button';
import FadeInWhenVisible from '../animations/FadeInWhenVisible';
import { useTypingEffect } from '../../hooks/useTypingEffect';

const FloatingParticles = () => {
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: Math.random() * 10 + 10,
        opacity: Math.random() * 0.3 + 0.1,
      })),
    []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-emerald-500 animate-float"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            bottom: '-10px',
            opacity: p.opacity,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = ({ data }) => {
  const typingTexts = [
    data.title,
    'Backend Architecture Expert',
    'Fintech Solutions Builder',
    'Distributed Systems Engineer',
  ];
  const typedText = useTypingEffect(typingTexts, 70, 35, 2000);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-cyan-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950" />
      <FloatingParticles />

      <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative max-w-5xl mx-auto text-center z-10">
        <FadeInWhenVisible>
          {/* Availability badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-full mb-6 border border-emerald-500/20">
            <Circle className="h-2.5 w-2.5 text-emerald-500 fill-emerald-500 animate-pulse" />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium text-sm">
              Available for opportunities
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 bg-clip-text text-transparent">
              {data.name.split(' ')[0]}
            </span>
          </h1>

          {/* Typing effect */}
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600 dark:from-emerald-400 dark:to-cyan-400 mb-6 min-h-[1.3em]">
            {typedText}
            <span className="animate-blink text-emerald-500">|</span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            {data.tagline}
          </p>

          {/* Quick stats row */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-10">
            {[
              { value: `${data.yearsOfExperience}+`, label: 'Years Exp' },
              { value: `${data.projectsCompleted}+`, label: 'Projects' },
              { value: data.transactionsProcessed, label: 'Transactions' },
            ].map((stat) => (
              <div key={stat.label} className="text-center px-4">
                <div className="text-2xl md:text-3xl font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <Button
              onClick={() => scrollToSection('#contact')}
              size="lg"
              className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              onClick={() => scrollToSection('#projects')}
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 dark:border-slate-600 hover:border-emerald-500 dark:hover:border-emerald-400 px-8 py-6 text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              View Projects
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6">
            {[
              { href: data.github, icon: Github, label: 'GitHub' },
              { href: data.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${data.email}`, icon: Mail, label: 'Email', isEmail: true },
            ].map(({ href, icon: Icon, label, isEmail }) => (
              <a
                key={label}
                href={href}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                className="p-3 rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-emerald-500 dark:hover:text-emerald-400 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 border border-slate-200 dark:border-slate-700"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </FadeInWhenVisible>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="h-6 w-6 text-slate-400 dark:text-slate-600" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
