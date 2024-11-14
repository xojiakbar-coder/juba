import React from "react";
import Button from "../Generic/Button/Button";
import useSize from "../../hooks/useSize";

const Contact = ({ data }) => {
  const { width } = useSize();
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

  return (
    <div>
      <div className="flex items-center flex-col w-full bg-white py-20 justify-center pt-[120px]">
        <h2 className="font-bold text-4xl text-center">Контакты</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-20 items-center">
          <iframe
            src={`https://yandex.com/map-widget/v1/?ll=${long}%2C${lat}&z=15`}
            allowFullScreen
            width="550"
            height="400"
            title="Location Map"
            loading="lazy"
          ></iframe>
          <div className="text-gray2 justify-self-center lg:justify-self-start text-center sm:text-start">
            <div className="flex flex-col justify-start">
              <p className="text-dark text-[24px]">
                {phone_number && phone_number}
              </p>
              <p className="text-[24px] ">{email}</p>
              <p className="leading-7 text-[24px]">Ислам Каримов 49, 10 этаж</p>
            </div>
            <ul className="flex flex-col mt-5 gap-[7px]">
              <li className={socialLinkStyle}>
                <a href={telegram_url && telegram_url}>Telegram</a>
              </li>
              <li className={socialLinkStyle}>
                <a href={instagram_url && instagram_url}>Instagram</a>
              </li>
              <li className={socialLinkStyle}>
                <a href={facebook_url && facebook_url}>Facebook</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-20">
        <h1 className="text-center font-bold text-base md:text-md lg:text-3xl text-white">
          Заполните форму,
          <br /> мы перезвоним и обсудим
          <br /> ваш проект
        </h1>
        <div className="flex justify-center w-full">
          <div
            className={`flex flex-col mt-10 grid grid-cols-1 gap-y-5 justify-items-center ${
              width > 1024 ? "w-[23%]" : "w-[60%]"
            }`}
          >
            <input
              className="w-full px-4 py-[14px] rounded-[8px] outline-none bg-dark text-light"
              placeholder="Имя"
              type="text"
              required
              maxLength={20}
            />
            <input
              className="w-full px-4 py-[14px] rounded-[8px] outline-none bg-dark text-light placeholder:text-gray-color"
              placeholder="Телефон номер"
              required
              maxLength={13}
            />
            <div className="flex justify-center w-full">
              <Button variant="outline" hover={true} className="w-full">
                Отправить
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
