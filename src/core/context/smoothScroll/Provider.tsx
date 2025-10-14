import React, { useEffect, useMemo } from 'react';

import Context from './context.ts';

const Provider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  let selector: string = 'a[href^="#"]';
  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>(selector);

    const handleClick = (e: MouseEvent) => {
      const link = e.currentTarget as HTMLAnchorElement;
      const href = link.getAttribute('href');

      if (!href || !href.startsWith('#')) return;

      e.preventDefault();

      const id = href.slice(1);
      const target = document.getElementById(id);

      if (target) {
        target.scrollIntoView({
          behavior: 'auto',
          block: 'start'
        });
      }
    };

    links.forEach(link => link.addEventListener('click', handleClick));
    return () => links.forEach(link => link.removeEventListener('click', handleClick));
  }, [selector]);

  const contextValue = useMemo(() => ({}), []);

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default Provider;
