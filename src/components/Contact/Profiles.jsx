import useSize from "../../hooks/useSize";

const Profiles = ({
  facebook_url,
  instagram_url,
  email,
  phone_number,
  telegram_url,
  land = "",
  profilesDir = "",
}) => {
  const { width } = useSize();
  const socialLinkStyle = `cursor-pointer leading-[24px] text-[24px] underline py-[6px] transition duration-105 ease-in-out w-max rounded-lg hover:text-yellow`;
  return (
    <div
      className={`flex flex-col justify-start items-start gap-[50px] min-h-full sm:text-start h-full ${
        width > 1020 ? "w-full" : "w-full px-[3%]"
      }`}
    >
      <ul
        className={`flex flex-${profilesDir} pt-[1px] gap-y-[12px] gap-x-[30px]`}
      >
        <li className={socialLinkStyle}>
          <a href={telegram_url}>Telegram</a>
        </li>
        <li className={socialLinkStyle}>
          <a href={facebook_url}>Facebook</a>
        </li>
        <li className={socialLinkStyle}>
          <a href={instagram_url}>Instagram</a>
        </li>
      </ul>
      {land === "contact" && (
        <div className="flex flex-col w-full gap-[12px]">
          <p className="text-[24px]">{email}</p>
          <p className="text-dark text-[24px]">{phone_number}</p>
          <p className="leading-7 text-[24px]">Ислам Каримов 49, 10 этаж</p>
        </div>
      )}
    </div>
  );
};

export default Profiles;
