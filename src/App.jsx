import "./App.css";
import WeatherCard from "./WeatherCard";

const citiesData = [
  {
    name: "Yangon, Myanmar",
    lat: 16.87,
    lon: 96.2,
  },
  {
    name: "New York, US",
    lat: 40.76,
    lon: -73.98,
  },
  {
    name: "London, UK",
    lat: 51.51,
    lon: -0.12,
  },
  {
    name: "Seoul, Korea",
    lat: 37.53,
    lon: 127.02,
  },
];

function App() {
  return (
    <main>
      {citiesData.map((city) => (
        <WeatherCard key={city.name} latLon={city} />
      ))}
    </main>
  );
}
export default App;
