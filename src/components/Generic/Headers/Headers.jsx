import { Button, Desc, Title } from "..";

const Headers = ({ data }) => {
  const { detail_title, detail_description } = data;
  return (
    <>
      {data && (
        <div className="px-[5%]">
          <header className="py-40">
            <div>
              <Title
                variant={"secondary"}
                className="max-md:text-3xl text-yellow"
              >
                {detail_title || "Page title not found"}
              </Title>
              <Desc className="w-[70%]">
                {detail_description || "Description not found"}
              </Desc>
              <Button variant={"primary"}>Loyihani muhokama qiling</Button>
            </div>
          </header>
        </div>
      )}
    </>
  );
};

export default Headers;
