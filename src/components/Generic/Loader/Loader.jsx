import loadingSpinner from "../../../assets/images/loader/load.png";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen min-w-full min-h-screen">
      <div className="flex items-center justify-center w-full h-full cursor-pointer select-noner">
        <div className="flex items-center justify-center w-[120px] h-[120px] rounded-full">
          <img
            src={loadingSpinner}
            alt=""
            className="w-[120px] h-[120px] rounded-full z-[999] animate-spin"
          />
        </div>
      </div>
    </div>
  );
};

export default Loader;
