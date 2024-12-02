import axios from "axios";
import Profiles from "./Profiles";
import useSize from "../../hooks/useSize";
import { useEffect, useState } from "react";
import Loader from "../Generic/Loader/Loader";
import ENDPOINTURL from "./../../config/endpoint";

const Contact = () => {
  const { width } = useSize();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      const res = await axios.get(`${ENDPOINTURL}/our-contact/`);
      setData(res.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  let lat = "";
  let long = "";
  let facebook_url, instagram_url, email, phone_number, telegram_url;

  if (data[0]) {
    ({
      latitude: lat,
      longitude: long,
      facebook_url,
      instagram_url,
      email,
      phone_number,
      telegram_url,
    } = data[0]);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="flex items-center flex-col w-full bg-white py-20 justify-center pt-[120px]">
      <h2 className="text-4xl font-bold text-center">Контакты</h2>
      <div
        className={`grid ${
          width > 1020 ? "grid-cols-2 px-[12%]" : "grid-cols-1 px-[20px]"
        } mt-20 gap-20 items-center justify-center w-full`}
      >
        <div
          className={`flex justify-center ${
            width > 1020
              ? "w-full"
              : width < 540
              ? "w-full px-[2%]"
              : "w-full px-[3%]"
          }`}
        >
          <iframe
            src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.8975010266386!2d${long}!3d${lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8bf39ed4a3ad%3A0xff77565dc9633cc4!2z!5e0!3m2!1sru!2s!4v1731738256655!5m2!1sru!2s`}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Location Map"
            className="w-full"
          ></iframe>
        </div>

        {/* Social profile links */}
        <Profiles
          land="contact"
          profilesDir="col"w
          facebook_url={facebook_url}
          instagram_url={instagram_url}
          email={email}
          phone_number={phone_number}
          telegram_url={telegram_url}
        />
      </div>
    </div>
  );
};

export default Contact;
