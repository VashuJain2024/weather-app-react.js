import { useState } from 'react';
import WeatherCard from './components/WeatherCard';
import { motion } from 'framer-motion';

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) return;

    const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        setWeather(null);
        alert('City not found!');
      }
    } catch (err) {
      console.error(err);
      alert('Error fetching weather data.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') fetchWeather();
  };

  const getBackgroundImage = () => {
    if (!weather) return "bg-[url('/bg.jpg')]";
    const main = weather.weather[0].main.toLowerCase();
    if (main.includes("clear")) return "bg-[url('/clear.jpg')]";
    if (main.includes("cloud")) return "bg-[url('/clouds.jpg')]";
    if (main.includes("rain")) return "bg-[url('/rain.jpg')]";
    if (main.includes("snow")) return "bg-[url('/snow.jpg')]";
    return "bg-gradient-to-br from-blue-300 to-blue-500";
  };

  return (
    <div
      className={`min-h-screen ${getBackgroundImage()} bg-cover bg-center flex flex-col items-center justify-center p-4 transition-all duration-700`}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg max-w-xl w-full"
      >
        <h1 className="text-4xl font-extrabold text-white mb-4 text-center drop-shadow-md">
          Weather App 🌤️
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Enter city name"
            className="flex-1 w-full px-4 py-2 rounded-md border shadow-inner bg-white/70 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={fetchWeather}
            className="px-6 py-2 bg-blue-700 text-white font-semibold rounded-md hover:bg-blue-800 transition"
          >
            Search
          </button>
        </div>
        {weather && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <WeatherCard data={weather} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}
