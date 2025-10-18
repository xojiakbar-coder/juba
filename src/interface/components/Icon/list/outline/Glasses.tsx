import { forwardRef, Ref, SVGProps } from 'react';

const SvgGlasses = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' ref={ref} {...props}>
      <path
        d='M7 4.5L4.65625 12M17 4.5L19.3438 12M10.5 15.6771V15.75C10.5 17.8211 8.82107 19.5 6.75 19.5V19.5C4.67893 19.5 3 17.8211 3 15.75V13.6563C3 12.7415 3.74153 12 4.65625 12V12M10.5 15.6771C10.8665 15.2619 11.4027 15 12 15C12.5973 15 13.1335 15.2619 13.5 15.6771M10.5 15.6771V15.6771C10.5 13.6463 8.85371 12 6.82291 12H4.65625M13.5 15.6771V15.75C13.5 17.8211 15.1789 19.5 17.25 19.5V19.5C19.3211 19.5 21 17.8211 21 15.75V13.6562C21 12.7415 20.2585 12 19.3438 12V12M13.5 15.6771V15.6771C13.5 13.6463 15.1463 12 17.1771 12H19.3438'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
const ForwardRef = forwardRef(SvgGlasses);
export default ForwardRef;
