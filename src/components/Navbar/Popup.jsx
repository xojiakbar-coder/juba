import axios from "axios";
import { Button } from "../ui/button";
import useSize from "../../hooks/useSize";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import ENDPOINTURL from "../../config/endpoint";
import {
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverRoot,
  PopoverTrigger,
} from "../ui/popover";

const Menu = ({ navbarTitle }) => {
  const { width } = useSize();
  const [loading, setLoading] = useState(true);
  const [detailData, setDetailData] = useState([]);
  const [serviceData, setServiceData] = useState([]);

  const placement = width > 1140 ? "bottom-start" : "bottom-end";

  const getServiceData = async () => {
    try {
      const res = await axios.get(`${ENDPOINTURL}/service/`);
      setServiceData(res?.data || []);
    } catch (err) {
      console.error(err);
    }
  };

  const getDetailData = async () => {
    try {
      const details = await Promise.all(
        serviceData.map(async (item) => {
          const res = await axios.get(
            `${ENDPOINTURL}/service/${item.id}/detail/`
          );
          return { serviceId: item.id, ...res?.data };
        })
      );
      setDetailData(details);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchServiceData = async () => {
      await getServiceData();
    };
    fetchServiceData();
  }, []);

  useEffect(() => {
    if (serviceData.length > 0) {
      const fetchDetailData = async () => {
        await getDetailData();
        setLoading(false);
      };
      fetchDetailData();
    }
  }, [serviceData]);

  if (loading) {
    return <div>{navbarTitle}</div>;
  }

  if (detailData.length === 0) {
    return <div>No data available</div>;
  }

  return (
    <div className="border">
      <PopoverRoot positioning={{ placement: placement }}>
        <PopoverTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="font-body-font whitespace-nowrap font-[400] w-full text-center text-light hover:text-yellow select-none transition duration-150 ease-out cursor-pointer"
          >
            {navbarTitle}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-light py-[20px] px-[24px] rounded-[20px] w-max">
          <PopoverArrow />
          <PopoverBody className="flex flex-col gap-[14px]">
            {detailData.map((detail) => {
              const menuTitle = detail.title;
              const detailTitle = detail[0].detail_title;

              return (
                <NavLink
                  key={detail.serviceId}
                  // key={detail.id}
                  className="font-[500] font-body-font text-gray-color group-hover:text-yellow group-hover:cursor-pointer text-[16px] transition duration-150 ease-in-out w-full hover:text-yellow"
                >
                  {detailTitle}
                </NavLink>
              );
            })}
          </PopoverBody>
        </PopoverContent>
      </PopoverRoot>
    </div>
  );
};

export default Menu;
