import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Loader } from "../Generic";
import Profiles from "../Home/Profiles";
import useSize from "../../hooks/useSize";
import ENDPOINTURL from "../../config/endpoint";

const Contact = () => {
  const { width } = useSize();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios(`${ENDPOINTURL}/our-contact/`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const [userData, setUserData] = useState({
    userName: "",
    phoneNumber: "",
  });

  const [wrongValue, setWrongValue] = useState({
    userNameWrong: "",
    phoneNumberWrong: "",
  });

  const phoneNumberRegex = /^\+?\d{1,14}$/;
  const userNameRegex = /^[a-zA-Zа-яА-ЯёЁ\s]{1,50}$/;

  let lat = "";
  let long = "";
  let facebook_url, instagram_url, email, phone_number, telegram_url;

  if (data[0]) {
    ({
      latitude: lat,
      longitude: long,
      facebook_url,
      instagram_url,
      email,
      phone_number,
      telegram_url,
    } = data[0]);
  }

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

  if (loading) {
    return <Loader />;
  }

  return (
    <div>
      <div className="flex items-center flex-col w-full bg-white py-20 justify-center pt-[120px]">
        <h2 className="text-4xl font-bold text-center">Контакты</h2>
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
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8975010266386!2d${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf39ed4a3ad%3A0xff77565dc9633cc4!2z!5e0!3m2!1sru!2s!4v1731738256655!5m2!1sru!2s`}
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
              className="w-full"
            ></iframe>
          </div>

          {/* Social profile links */}
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
              width > 1024 ? "w-[34%]" : width > 580 ? "w-[60%]" : "w-[90%]"
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
              maxLength={32}
            />
            {wrongValue.userNameWrong && (
              <p className="text-sm text-red-500">{wrongValue.userNameWrong}</p>
            )}
            <input
              className="w-full px-4 py-[14px] rounded-[8px] outline-none bg-dark-gray-color text-light placeholder:text-light"
              placeholder="Телефон номер"
              required
              maxLength={13}
              value={userData.phoneNumber}
              onChange={({ target }) =>
                setUserData({ ...userData, phoneNumber: target.value })
              }
            />
            {wrongValue.phoneNumberWrong && (
              <p className="text-sm text-red-500">
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
    </div>
  );
};

export default Contact;
