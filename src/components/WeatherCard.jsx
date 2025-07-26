export default function WeatherCard({ data }) {
    const { name, sys, main, weather, wind } = data;
    const icon = weather[0].icon;
    const desc = weather[0].description;

    return (
        <div className="mt-6 bg-white/50 backdrop-blur-md rounded-lg p-6 shadow-xl text-center">
            <h2 className="text-2xl font-bold text-blue-800">
                {name}, {sys.country}
            </h2>
            <img
                src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
                alt="weather icon"
                className="mx-auto my-2 w-24 h-24"
            />
            <p className="text-3xl font-bold">{Math.round(main.temp)}°C</p>
            <p className="capitalize text-gray-700">{desc}</p>
            <div className="mt-4 flex justify-around text-sm text-gray-600">
                <p>Humidity: {main.humidity}%</p>
                <p>Wind: {wind.speed} m/s</p>
            </div>
        </div>
    );
}
