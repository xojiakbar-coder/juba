import { useState } from "react";
import Title from "../Title/Title";
import Modal from "../Modal/Modal";
import useSize from "../../../hooks/useSize";
import { useLocation } from "react-router-dom";
import useLockBodyScroll from "../../../hooks/useLayoutEffect";
import aboutUS from "../../../assets/images/home/about-us.svg";

const About = ({ data, bottomPage }) => {
  const { width } = useSize();
  const location = useLocation();
  const [openModal, setModalToggle] = useState(false);
  useLockBodyScroll(width > 1190 && openModal);

  const toggleModal = () => {
    setModalToggle(!openModal);
  };

  const getTitle = () => {
    if (location.pathname === "/detail/smm") {
      return "SMM продвижение в Ташкенте";
    } else if (location.pathname === "/detail/web-development") {
      return "Создание сайтов в Ташкенте";
    } else if (location.pathname === "/") {
      return "JUBA - маркетинговое агентство в Ташкенте";
    }
    return "Услуга не найдена";
  };

  const aboutData = Array.isArray(data) && data[0] ? data[0] : data;

  const getShortDescription = (text, limit) => {
    if (text.length > limit) {
      const trimmedText = text.slice(0, limit).trim();
      return `${trimmedText}...`;
    }
    return text;
  };

  let descriptionLimit = 680;
  if (width < 1300) {
    descriptionLimit = 320;
  } else if (width < 1470) {
    descriptionLimit = 380;
  } else if (width < 1550) {
    descriptionLimit = 400;
  } else if (width < 1670) {
    descriptionLimit = 480;
  } else if (width < 1770) {
    descriptionLimit = 580;
  }

  const shortDescription = getShortDescription(
    aboutData?.description,
    descriptionLimit
  );

  return (
    <>
      <div
        className={`mt-[150px] w-full bg-light pb-[100px] py-[150px] px-[5%] ${
          openModal && "pointer-events-none"
        }`}
      >
        <div className="w-full min-h-[50%] h-[30%]">
          <div className="flex flex-col justify-center items-center">
            <Title variant="section-name">{getTitle()}</Title>
            <div
              className={`${
                width <= 1190 ? "flex flex-col gap-[30px]" : "grid"
              } ${
                width <= 1400 && width > 1200
                  ? "grid-cols-[50%_50%] gap-[30px] items-start"
                  : "grid-cols-2 gap-[50px] items-start"
              } mt-[50px]`}
            >
              <div className="w-full h-full">
                <img
                  src={aboutData?.photo ? aboutData.photo : aboutUS}
                  alt="about icon not found"
                  className="w-full rounded-lg cursor-pointer"
                />
              </div>
              <div className="flex flex-col justify-between h-full w-full">
                <div className="flex justify-between flex-col text-gray-color overflow-hidden font-[400] text-[24px] leading-[37px] w-full">
                  <p className="w-full overflow-hidden text-ellipsis">
                    {width > 1190 ? shortDescription : aboutData?.description}
                    {width > 1190 && (
                      <button
                        className="ml-2 text-dark-gray-color"
                        onClick={toggleModal}
                      >
                        more
                      </button>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* bottom min page */}
          {bottomPage}
        </div>
      </div>
      {width > 1190 && (
        <Modal
          isOpen={openModal}
          onClose={toggleModal}
          text={aboutData.description}
        />
      )}
    </>
  );
};

export default About;
