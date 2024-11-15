import React from "react";
import useSize from "../../hooks/useSize";

const Profiles = ({
  facebook_url,
  instagram_url,
  email,
  phone_number,
  telegram_url,
}) => {
  const { width } = useSize();
  const socialLinkStyle = `cursor-pointer leading-[24px] text-[24px] underline py-[6px] transition duration-105 ease-in-out w-max rounded-lg hover:text-yellow`;
  return (
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
  );
};

export default Profiles;
