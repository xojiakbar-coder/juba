import { useLayoutEffect } from "react";

const useLockBodyScroll = (shouldLock) => {
  useLayoutEffect(() => {
    if (shouldLock) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden"; // Disable scrolling

      return () => {
        document.body.style.overflow = originalStyle; // Restore scrolling
      };
    }
  }, [shouldLock]);
};

export default useLockBodyScroll;
