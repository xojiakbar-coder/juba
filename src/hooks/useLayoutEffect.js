import { useLayoutEffect } from "react";

const useLockBodyScroll = (shouldLock) => {
  useLayoutEffect(() => {
    if (shouldLock) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [shouldLock]);
};

export default useLockBodyScroll;
