import { useLocation } from "react-router-dom";

const GenericElement = () => {
  const location = useLocation();
  return (
    <div className="flex justify-center h-screen min-h-screen items-center w-full py-[100px] px-10">
      <h1 className="text-light font-body-font text-[24px] w-full text-center">
        {location.pathname} coming soon. . .
      </h1>
    </div>
  );
};

export default GenericElement;
