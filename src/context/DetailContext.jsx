import axios from "axios";
import ENDPOINTURL from "../config/endpoint";
import { createContext, useContext, useEffect, useState } from "react";

const DetailContext = createContext();

export const useDetailContext = () => {
  return useContext(DetailContext);
};

// Provider
export const DetailProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios(`${ENDPOINTURL}/service/1/detail/`);
        setData(response.data);
      } catch (err) {
        console.error("Ma'lumotlarni olishda xatolik yuz berdi:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DetailContext.Provider value={{ data, loading, error }}>
      {children}
    </DetailContext.Provider>
  );
};
