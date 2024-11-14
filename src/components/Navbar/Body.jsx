import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Body;
