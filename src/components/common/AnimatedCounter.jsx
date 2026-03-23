
import React from 'react';
import { useCounter } from '../../hooks/useCounter';

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', isVisible = false }) => {
  const count = useCounter(end, duration, 0, isVisible);

  return (
    <span>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
