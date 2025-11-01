import React from 'react';

export default function WeatherDisplay({ data }) {
  return (
    <div className="p-8 text-white rounded-2xl shadow-2xl backdrop-blur-sm bg-black/30 w-full max-w-5xl mx-auto mt-8">
      <div className="flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left md:w-1/3">
          <p className="text-6xl md:text-8xl mb-2">{data.icon}</p>
          <h1 className="text-4xl font-bold md:text-5xl">{data.location}</h1>
          <p className="text-lg text-gray-200">{data.country}</p>
        </div>

        <div className="text-center py-6 md:py-0 md:w-1/3">
          <p className="text-7xl font-light">{data.temperature}°C</p>
          <p className="text-xl font-semibold mt-1">{data.condition}</p>
          <p className="text-sm text-gray-200 mt-2">Feels like {data.feelsLike}°C</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-center md:mt-0 md:w-1/3 md:grid-cols-1 md:text-left">
          <div className="p-3 bg-white/10 rounded-lg">
            <p className="font-bold">Humidity</p>
            <p>{data.humidity}%</p>
          </div>
          <div className="p-3 bg-white/10 rounded-lg">
            <p className="font-bold">Wind Speed</p>
            <p>{data.windSpeed} km/h</p>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/20">
        <h2 className="mb-4 text-xl font-semibold">3-Day Forecast</h2>
        <div className="flex justify-between space-x-2 md:space-x-4">
          {data.forecast.map((day, index) => (
            <div key={index} className="flex flex-col items-center p-4 w-1/3 bg-white/10 rounded-xl shadow-lg hover:bg-white/20 transition duration-300">
              <p className="text-lg font-medium">{day.day}</p>
              <p className="text-3xl my-2">{day.icon}</p>
              <p className="text-xl font-bold">{day.temp}°C</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}