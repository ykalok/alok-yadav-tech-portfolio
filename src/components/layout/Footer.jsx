import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = ({ data }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 to-slate-950 dark:from-black dark:to-slate-950 text-white py-16 px-6 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
      <div className="absolute top-10 right-10 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              {data.name}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Software Development Engineer specializing in scalable fintech solutions and high-availability systems.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#about"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  About
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2 group"
                >
                  <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Connect</h4>
            <div className="flex gap-4 mb-6">
              <a
                href={data.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 hover:border-emerald-500"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 hover:border-emerald-500"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${data.email}`}
                className="p-3 bg-slate-800 rounded-lg text-slate-400 hover:text-emerald-400 hover:bg-slate-700 transition-all hover:scale-110 border border-slate-700 hover:border-emerald-500"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-slate-400 hover:text-emerald-400 transition-colors group"
            >
              <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
              Back to top
            </button>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="flex items-center justify-center gap-2 text-slate-400 mb-2">
            Made with <Heart className="h-4 w-4 text-emerald-500 fill-emerald-500 animate-pulse" /> by {data.name}
          </p>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
