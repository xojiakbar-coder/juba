export default (value: string) => {
  return value
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .join('-')
    .replace(/[^\w-]/g, '')
    .replace(/-+/g, '-');
};
