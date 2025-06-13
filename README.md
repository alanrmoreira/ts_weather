# Weather Forecast Widget

This project is a 7-day weather forecast widget built using React and Vite. It displays daily weather information and allows users to switch between Celsius and Fahrenheit. It also includes a search feature to get weather data for different cities.

## Requirements

- Node.js (version 18 or later)
- npm

## Getting Started

1. Clone the repository:

```
git clone https://github.com/alanrmoreira/ts_weather.git
cd ts_weather
```

2. Install dependencies:

```
npm install
```

3. Start the development server:

```
npm run dev
```

The app will be available at `http://localhost:5173`.

## Project Structure

```
ts_weather/
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── index.html
├── README.md
├── src
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   ├── types
│   │   └── jsx.d.ts
│   ├── vite-env.d.ts
│   └── WeatherCard.tsx
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Features

- Displays a 7-day weather forecast
- Switch between Celsius and Fahrenheit
- Search for cities
- Responsive layout

## Data Source

The weather data is provided by the [Open-Meteo API](https://open-meteo.com/).

## License

This project is for academic purposes only.
