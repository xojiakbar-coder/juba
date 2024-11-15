import axios from "axios";
import { useState } from "react";
import Profiles from "./Profiles";
import { ENDPOINTURL } from "./index";
import useSize from "../../hooks/useSize";
import Button from "../Generic/Button/Button";

const Contact = ({ data }) => {
  const { width } = useSize();
  const [userData, setUserData] = useState({
    username: "",
    phonenumber: "",
  });

  const [wrongValue, setWrongValue] = useState({
    userNameWrong: "",
    phoneNumberWrong: "",
  });

  const phoneNumberRegex = /^\+?\d{1,14}$/;
  const usernameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]{1,50}$/;

  const {
    latitude: lat,
    longitude: long,
    facebook_url,
    instagram_url,
    email,
    phone_number,
    telegram_url,
  } = data[0];

  const showMessage = ({ showMessage }) => {
    switch (showMessage.type) {
      case "success":
        setWrongValue({ userNameWrong: "" });
      default:
        return;
    }
  };

  const onSubmit = async () => {
    let formIsValid = false;

    if (
      usernameRegex.test(userData.username) &&
      phoneNumberRegex.test(userData.phonenumber)
    ) {
      formIsValid = true;
    } else {
    }

    if (formIsValid) {
      const requestOptions = {
        method: "POST",
        body: JSON.stringify({
          name: [userData.username],
          phone_number: [userData.phonenumber],
        }),
      };

      fetch(`${ENDPOINTURL}/contact-user/`, requestOptions)
        .then((res) => res.ok === true && showMessage("success"))
        .catch((error) => error && showMessage("Something went wrong"));
    }
  };

  return (
    <div>
      <div className="flex items-center flex-col w-full bg-white py-20 justify-center pt-[120px]">
        <h2 className="font-bold text-4xl text-center">Контакты</h2>
        <div
          className={`grid ${
            width > 1020 ? "grid-cols-2 px-[12%]" : "grid-cols-1 px-[20px]"
          } mt-20 gap-20 items-center justify-center w-full`}
        >
          <div
            className={`flex justify-center ${
              width > 1020
                ? "w-full"
                : width < 540
                ? "w-full px-[2%]"
                : "w-full px-[10%]"
            }`}
          >
            <iframe
              src={`https://yandex.com/map-widget/v1/?ll=${long}%2C${lat}&z=15`}
              allowFullScreen
              height="400"
              title="Location Map"
              loading="lazy"
              className="w-full"
            ></iframe>
          </div>
          {/* our social profile links */}
          <Profiles
            facebook_url={facebook_url}
            instagram_url={instagram_url}
            email={email}
            phone_number={phone_number}
            telegram_url={telegram_url}
          />
        </div>
      </div>

      <div className="py-[120px] bg-dark-color">
        <h1 className="text-center font-bold text-base md:text-md md:text-3xl sm:text-xl text-[18px] text-white">
          Заполните форму,
          <br /> мы перезвоним и обсудим
          <br /> ваш проект
        </h1>
        <div className="flex justify-center w-full">
          <form
            className={`flex flex-col mt-10 min-w-[34%] grid grid-cols-1 gap-y-4 justify-items-center ${
              width > 1024 ? "w-[34%]" : "w-[60%]"
            }`}
          >
            <input
              className="w-full px-4 py-[14px] rounded-[8px] outline-none bg-dark-gray-color text-light placeholder:text-light"
              placeholder="Имя"
              type="text"
              required
              value={userData.username}
              onChange={({ target }) =>
                setUserData({ ...userData, username: target.value })
              }
              maxLength={50}
            />
            <input
              className="w-full px-4 py-[14px] rounded-[8px] outline-none bg-dark-gray-color text-light placeholder:text-light"
              placeholder="Телефон номер"
              required
              maxLength={13}
              value={userData.phonenumber}
              onChange={({ target }) =>
                setUserData({ ...userData, phonenumber: target.value })
              }
            />
            <Button
              variant="outline"
              hover={true}
              className="w-full"
              onClick={onSubmit}
            >
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
