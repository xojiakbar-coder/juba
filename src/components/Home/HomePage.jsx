import HomeContent from "./HomeContent";
import useSize from "../../hooks/useSize";
import homeImage from "../../assets/images/home/home.png";

const HomePage = ({ data }) => {
  const { width } = useSize();
  const { title, short_description, photo } = data[0];

  const backgroundImage = {
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundImage: `url(${photo ? photo : homeImage})`,
    backgroundSize: `${width > 1020 ? "cover" : "100% 100%"}`,
  };

  return (
    <>
      {data && (
        <div className="relative flex flex-col w-full">
          <div
            className={`w-full min-h-[200px] ${
              width > 1020
                ? "h-[650px]"
                : width > 800
                ? "h-[400px]"
                : width > 700
                ? "h-[300px]"
                : "h-[200px]"
            } relative rounded-[30px]`}
            style={backgroundImage}
          />
          {width > 1020 ? (
            <div className="absolute w-[90%] top-[20%] z-10">
              <div className="h-max pl-[50px]">
                <HomeContent
                  title={title}
                  short_description={short_description}
                />
              </div>
            </div>
          ) : (
            <>
              <div className="absolute w-[90%] min-h-max h-max" />
              <section className="pt-[50px]">
                <HomeContent
                  title={title}
                  short_description={short_description}
                />
              </section>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default HomePage;
