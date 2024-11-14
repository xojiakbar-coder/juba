import HomeContent from "./HomeContent";
import homeImage from "../../assets/images/home/home.png";
import useSize from "../../hooks/useSize";

const Home = ({ data }) => {
  const { width } = useSize();
  const { title, short_description } = data[0];
  const backgroundImage = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${homeImage})`,
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
