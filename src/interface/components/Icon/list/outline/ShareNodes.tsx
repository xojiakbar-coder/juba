import { forwardRef, Ref, SVGProps } from 'react';

const SvgShareNodes = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' ref={ref} {...props}>
      <path
        d='M9.5 10L15 7M9.5 14L15 17M18 21V21C19.6569 21 21 19.6569 21 18V18C21 16.3431 19.6569 15 18 15V15C16.3431 15 15 16.3431 15 18V18C15 19.6569 16.3431 21 18 21ZM18 9V9C19.6569 9 21 7.65685 21 6V6C21 4.34315 19.6569 3 18 3V3C16.3431 3 15 4.34315 15 6V6C15 7.65685 16.3431 9 18 9ZM6.5 15.5V15.5C8.433 15.5 10 13.933 10 12V12C10 10.067 8.433 8.5 6.5 8.5V8.5C4.567 8.5 3 10.067 3 12V12C3 13.933 4.567 15.5 6.5 15.5Z'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgShareNodes);
export default ForwardRef;
