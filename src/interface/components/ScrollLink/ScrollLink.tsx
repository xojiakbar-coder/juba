import React from 'react';

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  to: string;
  offset?: number;
}

const ScrollLink = ({ to, offset = 80, children, ...rest }: IProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.getElementById(to);

    if (target) {
      const y = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: 'instant' });
    }
  };

  return (
    <button onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};

export default ScrollLink;
