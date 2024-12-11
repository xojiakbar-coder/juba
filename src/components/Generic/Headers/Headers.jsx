import { Fragment } from "react";
import { Button, Desc, Title } from "..";

const Headers = ({ data }) => {
  const detail_title = data?.[0]?.detail_title || "Page title not found";
  const detail_description =
    data?.[0]?.detail_description || "Description not found";

  return (
    <Fragment>
      {data && data[0] && (
        <header className="px-[5%] py-40">
          <div>
            <Title
              variant={"secondary"}
              className="max-md:text-3xl text-yellow"
            >
              {detail_title}
            </Title>
            <Desc className="w-[70%]">{detail_description}</Desc>
            <Button variant={"primary"}>Loyihani muhokama qiling</Button>
          </div>
        </header>
      )}
    </Fragment>
  );
};

export default Headers;
