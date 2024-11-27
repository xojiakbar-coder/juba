import axios from "axios";
import { useState } from "react";
import { Button } from "../Generic";
import { Element } from "react-scroll";
import useSize from "../../hooks/useSize";
import ENDPOINTURL from "../../config/endpoint";

const Contact = () => {
  const { width } = useSize();

  const [userData, setUserData] = useState({
    userName: "",
    phoneNumber: "",
  });

  const [wrongValue, setWrongValue] = useState({
    userNameWrong: "",
    phoneNumberWrong: "",
  });

  const phoneNumberRegex = /^\+?\d{1,12}$/;
  const userNameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]{1,32}$/;

  const onSubmit = async () => {
    const { userName, phoneNumber } = userData;

    let errors = {};
    if (!userName) {
      errors.userNameWrong = "пожалуйста, введите имя";
    } else if (!userNameRegex.test(userName)) {
      errors.userNameWrong = "Неверный формат имени.";
    }
    if (!phoneNumber) {
      errors.phoneNumberWrong = "пожалуйста, введите свой номер телефона";
    } else if (!phoneNumberRegex.test(phoneNumber)) {
      errors.phoneNumberWrong = "Неверный формат номера телефона.";
    }

    setWrongValue(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await axios.post(`${ENDPOINTURL}/contact-user/`, {
          name: userName,
          phone_number: phoneNumber,
        });

        if (response.status === 200 || response.status === 201) {
          alert("Успешно отправлено!");
          setUserData({ userName: "", phoneNumber: "" });
        } else {
          alert("Ошибка при отправке данных. Попробуйте снова.");
        }
      } catch (error) {
        alert("Ошибка при отправке данных. Попробуйте снова.");
      }
    }
  };

  return (
    <Element name="/form">
      <div className="py-[120px] bg-dark-color">
        <h1 className="text-center font-bold text-base md:text-md md:text-3xl sm:text-xl text-[18px] text-white">
          Заполните форму,
          <br /> мы перезвоним и обсудим
          <br /> ваш проект
        </h1>
        <div className="flex justify-center w-full">
          <form
            className={`flex flex-col mt-10 min-w-[34%] grid grid-cols-1 gap-y-4 justify-items-center ${
              width > 1024 ? "w-[34%]" : width > 580 ? "w-[60%]" : "w-[90%]"
            }`}
          >
            <input
              className="w-full px-4 h-[60px] min-h-[60px] rounded-[8px] outline-none bg-dark-gray-color text-light placeholder:text-gray-color"
              placeholder="Имя"
              type="text"
              required
              value={userData.userName}
              onChange={({ target }) =>
                setUserData({ ...userData, userName: target.value })
              }
              maxLength={32}
            />
            {wrongValue.userNameWrong && (
              <p className="text-sm text-danger-color">
                {wrongValue.userNameWrong}
              </p>
            )}
            <div className="flex justify-start items-center w-full h-[60px] min-h-[60px] rounded-[8px] px-4 outline-none bg-dark-gray-color">
              <p className="flex items-center w-max outline-none text-gray-color mr-[10px] h-full">
                +998
              </p>
              <input
                className="w-full h-full text-light bg-transparent outline-none placeholder:text-gray-color"
                placeholder="Телефон номер"
                required
                maxLength={12}
                value={userData.phoneNumber}
                onChange={({ target }) =>
                  setUserData({ ...userData, phoneNumber: target.value })
                }
              />
            </div>
            {wrongValue.phoneNumberWrong && (
              <p className="md:text-[16px] text-sm text-danger-color">
                {wrongValue.phoneNumberWrong}
              </p>
            )}
            <Button
              variant="outline"
              hover={true}
              className="w-full"
              onClick={(e) => {
                e.preventDefault();
                onSubmit();
              }}
            >
              Отправить
            </Button>
          </form>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
