import React from "react";
import Button from "../Button/Button";

const Modal = ({ isOpen, onClose, text }) => {
  return (
    <>
      {isOpen && (
        <div className="flex flex-col fixed px-[5%] py-[45px] h-screen min-h-screen top-0 bg-modal-bg-color z-[999] overflow-auto">
          <div className="w-[95%]">
            <p className="w-full h-max text-light md:text-[18px] sm:text-[16px] text-[16px] md:leading-[35px]">
              {text}
            </p>
          </div>
          <div className="flex flex-col justify-end mt-auto ml-auto w-full">
            <Button
              onClick={onClose}
              variant={"secondary"}
              className="w-max h-full mt-[30px] ml-auto"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
