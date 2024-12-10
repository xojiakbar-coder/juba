import "./loader.css";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen min-w-full min-h-screen">
      <div className="relative flex items-center justify-center w-12 h-12">
        <div className="relative flex items-center h-full w-1/4 origin-top animate-swing">
          <div className="w-full h-1/4 bg-yellow rounded-full"></div>
        </div>
        <div className="relative flex items-center h-full w-1/4 origin-top">
          <div className="w-full h-1/4 bg-yellow rounded-full"></div>
        </div>
        <div className="relative flex items-center h-full w-1/4 origin-top">
          <div className="w-full h-1/4 bg-yellow rounded-full"></div>
        </div>
        <div className="relative flex items-center h-full w-1/4 origin-top animate-swing2">
          <div className="w-full h-1/4 bg-yellow rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
