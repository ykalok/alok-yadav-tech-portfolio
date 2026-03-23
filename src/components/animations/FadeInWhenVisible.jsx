import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const FadeInWhenVisible = ({ children, delay = 0, className = '' }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-10'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default FadeInWhenVisible;

