import HomeContent from "./HomeContent";
import useSize from "../../hooks/useSize";
import homeImage from "../../assets/images/home/home.png";

const Home = ({ data }) => {
  const { width } = useSize();
  // console.log(data, "slider");
  const { title, short_description, photo } = data[0];

  const backgroundImage = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundAttachment: "fixed",
    backgroundImage: `url(${photo ? photo : homeImage})`,
  };

  return (
    <div className="flex flex-col w-full">
      <div
        className="w-full min-h-[700px] relative rounded-[30px]"
        style={backgroundImage}
      />
      {width > 1020 ? (
        <div className="absolute w-[90%] top-[33%] z-10">
          <div className="h-max pl-[50px]">
            <HomeContent title={title} short_description={short_description} />
          </div>
        </div>
      ) : (
        <>
          <div className="absolute w-[90%] min-h-max h-max" />
          <section className="pt-[50px]">
            <HomeContent title={title} short_description={short_description} />
          </section>
        </>
      )}
    </div>
  );
};

export default Home;
