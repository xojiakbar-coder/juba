import React, { useState } from "react";

const Lang = ({ onClose }) => {
  const [lang, setLang] = useState("ru");
  const langStyle = `font-[400] text-[16px] font-body text-light hover:text-yellow`;
  return (
    <div className="flex flex-row gap-x-[15px]" onClick={() => onClose()}>
      <button
        className={`${lang === "ru" && "text-yellow"} ${langStyle}`}
        onClick={() => setLang("ru")}
      >
        Ru
      </button>
      <button
        className={`${lang === "uz" && "text-yellow"} ${langStyle}`}
        onClick={() => setLang("uz")}
      >
        Uz
      </button>
    </div>
  );
};

export default Lang;
