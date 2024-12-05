import { useCallback } from "react";

const useSmoothScroll = () => {
  const scrollToSection = useCallback((id) => {
    const section = document.getElementById(id);

    // Special case: scroll to the top if the section is the first one
    const targetPosition = section ? section.offsetTop : 0; // Default to 0 for top
    const startPosition = window.pageYOffset; // Current scroll position
    const distance = targetPosition - startPosition; // Distance to scroll
    const duration = 600; // Duration in milliseconds
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Progress (0 to 1)
      const easeInOutQuad =
        progress < 0.5
          ? 2 * progress * progress
          : 1 - Math.pow(-2 * progress + 2, 2) / 2;

      const scrollPosition = startPosition + distance * easeInOutQuad;

      window.scrollTo(0, scrollPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  return scrollToSection;
};

export default useSmoothScroll;
