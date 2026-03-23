
import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-xl text-slate-600 dark:text-slate-400 mt-4">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded mt-4"></div>
    </div>
  );
};

export default SectionTitle;
