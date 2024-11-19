import React from "react";
import { Button, Desc, Title } from "../../Generic";

const Headers = ({ data }) => {
  const { detail_title, detail_description } = data;
  return (
    <div>
      <header className="px-4 py-40">
        <div>
          <Title variant={"secondary"} className="max-md:text-3xl">
            {detail_title || "Page title not found"}
          </Title>
          <Desc className="w-full">
            {detail_description || "Description not found"}
          </Desc>
          <Button variant={"primary"}>Обсудить проект</Button>
        </div>
      </header>
    </div>
  );
};

export default Headers;
