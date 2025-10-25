export default function scrollTo(state: any, offset: number = -80, behavior: ScrollBehavior = 'instant') {
  const sectionName = state?.scrollTo as string | undefined;
  if (!sectionName) return;

  const section = document.getElementById(sectionName);
  if (!section) return;

  const y = section.getBoundingClientRect().top + window.scrollY + offset;

  window.scrollTo({
    top: y,
    behavior
  });
}
