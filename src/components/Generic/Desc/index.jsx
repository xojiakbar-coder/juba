const Desc = ({ className = "", children, center = false }) => {
  return (
    <p
      className={`${className} text-[var(--grayColor)] my-6 ${
        center && "text-center"
      }`}
    >
      {children}
    </p>
  );
};

export default Desc;
