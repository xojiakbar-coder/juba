import React from 'react';
import { uid } from 'radash';

const Ru: React.FC = () => {
  const uniqueId = uid(10);

  return (
    <svg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g clipPath={`url(#clip${uniqueId})`}>
        <path
          d='M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z'
          fill='#F0F0F0'
        />
        <path
          d='M23.2536 16.1739C23.736 14.8739 24 13.4678 24 12C24 10.5321 23.736 9.12606 23.2536 7.82608H0.746391C0.264047 9.12606 0 10.5321 0 12C0 13.4678 0.264047 14.8739 0.746391 16.1739L12 17.2173L23.2536 16.1739Z'
          fill='#0052B4'
        />
        <path
          d='M11.9992 24C17.1588 24 21.5573 20.7435 23.2528 16.1739H0.745605C2.44112 20.7435 6.83964 24 11.9992 24Z'
          fill='#D80027'
        />
      </g>
      <defs>
        <clipPath id={`clip${uniqueId}`}>
          <rect width='24' height='24' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Ru;
