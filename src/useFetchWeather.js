import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const useFetchWeather = (latLon) => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      if (!API_KEY) {
        setError({ message: "API key not found" });
        setLoading(false);
        return;
      }

      setError(null);
      setLoading(true);

      const res = await fetch(
        `https://api.openweathermap.org/data/3.0/onecall?lat=${latLon.lat}&lon=${latLon.lon}&appid=${API_KEY}`
      );

      const body = await res.json();

      setLoading(false);

      if (!res.ok) {
        setError(body);
        return;
      }

      setData(body);
    })();
  }, [latLon]);

  return { error, loading, data };
};

export default useFetchWeather;
