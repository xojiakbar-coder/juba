import { forwardRef, Ref, SVGProps } from 'react';

const SvgPause = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' ref={ref} {...props}>
      <path
        d='M13.2463 7.26337C10.5344 5.45522 9.17844 4.55114 8.06996 4.86448C7.72237 4.96273 7.4002 5.13514 7.12562 5.36984C6.25 6.1183 6.25 7.74802 6.25 11.0075V12.9936C6.25 16.2527 6.25 17.8823 7.12555 18.6307C7.4001 18.8654 7.72225 19.0378 8.06982 19.1361C9.17821 19.4495 10.5341 18.5456 13.246 16.7379L14.7356 15.745C16.9748 14.2523 18.0945 13.506 18.297 12.4892C18.3612 12.1669 18.3612 11.835 18.297 11.5127C18.0946 10.4959 16.975 9.74945 14.7359 8.25654L13.2463 7.26337Z'
        fill='currentColor'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgPause);
export default ForwardRef;
