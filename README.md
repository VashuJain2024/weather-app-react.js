# 🌤️ Weather App

A modern, responsive weather application built with **React + Vite**, styled using **Tailwind CSS**, animated with **Framer Motion**, and powered by the **OpenWeatherMap API**. Users can search any city worldwide and get live weather info like temperature, humidity, and conditions.

---

## 🔗 Live Demo

> 🚀 *https://check-weather-website.netlify.app/*

--- 

## 📦 Features

- 🔍 Search for weather by city
- 🌡️ Real-time weather data: temperature, humidity, wind, description
- ⛅ Dynamic weather icons and backgrounds
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive and mobile-friendly design
- 🔒 Secure environment variables via `.env` file

---

## 🚀 Tech Stack

- **React.js + Vite**
- **Tailwind CSS**
- **Framer Motion**
- **OpenWeatherMap API**

---

## 🛠️ Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/your-username/weather-app.git
cd weather-app

# 2. Install dependencies
npm install

# 3. Add your OpenWeatherMap API key
touch .env
```

In `.env` file, add:
```
VITE_WEATHER_API_KEY=your_api_key_here
```

Then run the app:
```bash
npm run dev
```

---

## 🧾 Folder Structure

```
weather-app/
├── public/
│   ├── clear.jpg
│   ├── clouds.jpg
│   ├── rain.jpg
│   ├── snow.jpg
│   └── preview.jpg
├── src/
│   ├── components/
│   │   └── WeatherCard.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .env
├── .gitignore
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── README.md
```

---

## ⚠️ Important Notes

- Do **NOT** commit your `.env` file. It should already be in `.gitignore`.
- If your API key is ever exposed, regenerate it from your [OpenWeatherMap](https://openweathermap.org/api) dashboard.

---

## 🚢 Deployment Options

You can deploy this app on:
- **Netlify** *(recommended for ease)*
- **Vercel**
- **Firebase Hosting**
- **GitHub Pages (via Vite plugin)*

Make sure to set your environment variable `VITE_WEATHER_API_KEY` securely on the platform.

---  

> Made with ❤️ using React, Tailwind, and OpenWeatherMap
