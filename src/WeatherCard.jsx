import useFetchWeather from "./useFetchWeather";

const WeatherCard = ({ latLon }) => {
  const { data, error, loading } = useFetchWeather(latLon);

  if (loading) return <h1>Loading....</h1>;

  if (error) {
    return (
      <div className="card">
        <pre>{error.message || "Something went wrong"}</pre>
      </div>
    );
  }

  return (
    <article className="card">
      <section className="weather-session">
        <h1 className="weather">
          {data.current?.weather?.[0]?.main || "Unknown"}
        </h1>
        <p className="timezone">{data.timezone}</p>
      </section>
      <p className="temp">{data.current?.temp}</p>
      <div className="row">
        <div className="column">
          <p className="label">Sunrise</p>
          <p className="data">
            {new Date(data.current?.sunrise).toTimeString()}
          </p>
        </div>

        <div className="border" />

        <div className="column">
          <p className="label">Sunset</p>
          <p className="data">
            {new Date(data.current?.sunset).toTimeString()}
          </p>
        </div>

        <div className="border" />

        <div className="column">
          <p className="label">Humidity</p>
          <p className="data">{data.current?.humidity}</p>
        </div>
      </div>
    </article>
  );
};

export default WeatherCard;
