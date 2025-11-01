/**
 * Mock weather service for WeatherSense (Mock-only).
 * Replace with real API calls if needed.
 */

export const fetchMockWeatherData = async (city) => {
  // Simulate latency
  await new Promise(res => setTimeout(res, 700));

  const cityData = {
    'new delhi': { location: 'New Delhi', country: 'India', temperature: 38, condition: 'Hot and Hazy', icon: '🔥', humidity: 40, windSpeed: 15, feelsLike: 40, forecast: [{ day: 'Mon', temp: 39, icon: '🔥' }, { day: 'Tue', temp: 37, icon: '☀️' }, { day: 'Wed', temp: 36, icon: '🌤️' }] },
    'mumbai': { location: 'Mumbai, Maharashtra', country: 'India', temperature: 30, condition: 'Humid and Cloudy', icon: '☁️', humidity: 80, windSpeed: 10, feelsLike: 35, forecast: [{ day: 'Mon', temp: 31, icon: '☁️' }, { day: 'Tue', temp: 29, icon: '🌧️' }, { day: 'Wed', temp: 30, icon: '🌤️' }] },
    'bengaluru': { location: 'Bengaluru, Karnataka', country: 'India', temperature: 24, condition: 'Pleasant Showers', icon: '🌦️', humidity: 70, windSpeed: 8, feelsLike: 25, forecast: [{ day: 'Mon', temp: 26, icon: '🌦️' }, { day: 'Tue', temp: 25, icon: '🌧️' }, { day: 'Wed', temp: 23, icon: '☁️' }] },
    'kolkata': { location: 'Kolkata, West Bengal', country: 'India', temperature: 34, condition: 'Scattered Thunderstorms', icon: '⛈️', humidity: 75, windSpeed: 20, feelsLike: 38, forecast: [{ day: 'Mon', temp: 35, icon: '⛈️' }, { day: 'Tue', temp: 33, icon: '☀️' }, { day: 'Wed', temp: 34, icon: '🌤️' }] },
  };

  const normalized = city.toLowerCase().trim();
  if (cityData[normalized]) return cityData[normalized];
  if (normalized.length > 0) {
    return { location: city, country: 'India', temperature: 27, condition: 'Mostly Sunny', icon: '🌞', humidity: 65, windSpeed: 7, feelsLike: 28, forecast: [{ day: 'Mon', temp: 28, icon: '🌞' }, { day: 'Tue', temp: 26, icon: '☁️' }, { day: 'Wed', temp: 27, icon: '🌤️' }] };
  }
  throw new Error('Please enter a city name.');
};