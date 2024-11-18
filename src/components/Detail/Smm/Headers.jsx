import React from "react";
import { Button, Desc, Title } from "../../Generic";

const Headers = ({ data }) => {
  const { detail_title, detail_description } = data[0];
  return (
    <div>
      <header className="px-4 py-40">
        <div>
          <Title variant={"secondary"} className="max-md:text-3xl">
            {detail_title || "Page title not found"}
          </Title>
          <Desc className="w-full">
            Экспертная команда по веб-разработке в Ташкенте: Создание
            качественных и эффективных сайтов для вашего бизнеса Обсудить проект
          </Desc>
          <Button variant={"primary"}>Обсудить проект</Button>
        </div>
      </header>
    </div>
  );
};

export default Headers;
