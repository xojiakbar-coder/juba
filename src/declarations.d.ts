declare module '@splidejs/react-splide' {
  import * as React from 'react';

  export interface SplideProps {
    options?: Record<string, any>;
    hasTrack?: boolean;
    [key: string]: any;
  }

  export const Splide: React.FC<SplideProps>;
  export const SplideSlide: React.FC<React.PropsWithChildren<{}>>;
}
