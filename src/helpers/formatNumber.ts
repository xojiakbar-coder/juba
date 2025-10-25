export default (raw: string) => {
  if (!raw) return '';

  const onlyDigits = raw.replace(/\D/g, '');
  let core = onlyDigits;

  if (core.startsWith('998')) core = core.slice(3);
  else if (core.startsWith('0') && core.length === 10) core = core.slice(1);
  else return raw;

  if (core.length !== 9) return raw;

  const a = core.slice(0, 2);
  const b = core.slice(2, 5);
  const c = core.slice(5, 7);
  const d = core.slice(7, 9);

  return `+998 ${a} ${b} ${c} ${d}`;
};
