import React, { useState } from "react";

const Lang = () => {
  const [lang, setLang] = useState("uz");
  const langStyle = `font-[400] text-[16px] font-body text-light hover:text-yellow`;
  return (
    <div className="flex flex-row gap-x-[15px]">
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
