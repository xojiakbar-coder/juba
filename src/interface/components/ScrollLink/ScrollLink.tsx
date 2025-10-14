import React from 'react';

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to: string;
  offset?: number;
}

const ScrollLink = ({ to, offset = 0, children, ...rest }: IProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById(to);
    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'auto' });
    }
  };

  return (
    <a href={`#${to}`} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
};

export default ScrollLink;
