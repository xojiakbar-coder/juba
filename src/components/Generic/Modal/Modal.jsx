import React from "react";
import Button from "../Button/Button";

const Modal = ({ isOpen, onClose, text }) => {
  return (
    <>
      {isOpen && (
        <div className="flex flex-col fixed px-[5%] py-[45px] h-screen min-h-screen top-0 bg-modal-bg-color z-[999] overflow-auto">
          <div className="w-full">
            <p className="w-full h-max text-light md:text-[24px] sm:text-[20px] text-[18px] md:leading-[42px]">
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
