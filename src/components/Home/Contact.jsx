import axios from "axios";
import { ENDPOINTURL } from "./index";
import useSize from "../../hooks/useSize";
import { useState } from "react";
import Button from "../Generic/Button/Button";

const Contact = ({ data }) => {
  const { width } = useSize();
  const [userData, setUserData] = useState({
    username: "",
    phonenumber: "",
  });
  const [error, setError] = useState({
    usernameError: "",
    phoneNumberError: "",
  });

  const phoneNumberRegex = /^\+?\d{1,14}$/;
  const usernameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]{1,50}$/;

  const messages = {
    usernameError: "Username can only contain letters and spaces.",
    phoneNumberError: "Phone number must only contain digits.",
  };

  console.log(userData.username, userData.phonenumber);

  const socialLinkStyle = `cursor-pointer leading-[24px] text-[24px] underline py-[6px] transition duration-105 ease-in-out w-max rounded-lg hover:text-yellow`;

  const {
    latitude: lat,
    longitude: long,
    facebook_url,
    instagram_url,
    email,
    phone_number,
    telegram_url,
  } = data[0];

  const onSubmit = async () => {
    // e.preventDefault();

    let formIsValid = false;
    if (
      usernameRegex.test(userData.username) &&
      usernameRegex.test(userData.phonenumber)
    ) {
      formIsValid = true;
      console.log(formIsValid);
    }

    if (formIsValid) {
      try {
        const data = await axios.post(`${ENDPOINTURL}/contact-user/`, {
          name: userData.username,
          phone_number: userData.phonenumber,
        });

        if (data) {
          alert("Form successfully submitted");
          setUserData({ username: "", phonenumber: "" });
        } else {
          alert("Something went wrong with the submission.");
        }
      } catch (error) {
        console.error("Something went wrong with the submission:", error);
      }
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
          <div
            className={`text-gray2 text-center sm:text-start ${
              width > 1020 ? "w-full" : "w-full"
            }`}
          >
            <div className="flex flex-col items-center w-full">
              <p className="text-dark text-[24px]">{phone_number}</p>
              <p className="text-[24px]">{email}</p>
              <p className="leading-7 text-[24px]">Ислам Каримов 49, 10 этаж</p>
            </div>
            <ul className="flex flex-col mt-5 gap-[7px] items-center">
              <li className={socialLinkStyle}>
                <a href={telegram_url}>Telegram</a>
              </li>
              <li className={socialLinkStyle}>
                <a href={instagram_url}>Instagram</a>
              </li>
              <li className={socialLinkStyle}>
                <a href={facebook_url}>Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-20 bg-dark-color">
        <h1 className="text-center font-bold text-base md:text-md lg:text-3xl text-white">
          Заполните форму,
          <br /> мы перезвоним и обсудим
          <br /> ваш проект
        </h1>
        <div className="flex justify-center w-full">
          <form
            className={`flex flex-col mt-10 grid grid-cols-1 gap-y-4 justify-items-center ${
              width > 1024 ? "w-[23%]" : "w-[60%]"
            }`}
          >
            <input
              className="w-full px-4 py-[14px] rounded-[8px] outline-none bg-dark text-light"
              placeholder="Имя"
              type="text"
              required
              value={userData.username}
              onChange={({ target }) =>
                setUserData({ ...userData, username: target.value })
              }
              maxLength={50}
            />
            <div className="flex flex-col w-full">
              {error.usernameError && (
                <p className="text-danger-color text-sm">
                  {error.usernameError}
                </p>
              )}
            </div>
            <input
              className="w-full px-4 py-[14px] rounded-[8px] outline-none bg-dark text-light placeholder:text-gray-color"
              placeholder="Телефон номер"
              required
              maxLength={13}
              value={userData.phonenumber}
              onChange={({ target }) =>
                setUserData({ ...userData, phonenumber: target.value })
              }
            />
            <div className="flex flex-col w-full">
              {error.phoneNumberError && (
                <p className="text-danger-color text-sm">
                  {error.phoneNumberError}
                </p>
              )}
            </div>
            <div className="flex justify-center w-full cursor-progress">
              <Button
                variant="outline"
                hover={true}
                className="w-full"
                onClick={onSubmit}
              >
                Отправить
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
