import React, { useState, useCallback, useEffect, useMemo } from 'react';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import { fetchMockWeatherData } from './services/weatherService';

const App = () => {
  const [city, setCity] = useState('New Delhi');
  const [searchInput, setSearchInput] = useState('New Delhi');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = useCallback(async (searchCity) => {
    setLoading(true);
    setError(null);
    setWeatherData(null);
    setCity(searchCity);

    try {
      const data = await fetchMockWeatherData(searchCity);
      setWeatherData(data);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data. Try searching for a known city.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchWeatherData(city);
  }, [fetchWeatherData, city]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      fetchWeatherData(searchInput.trim());
    } else {
      setError('Please enter a city name.');
    }
  };

  const backgroundClass = useMemo(() => {
    if (!weatherData) return 'bg-gray-700';

    const condition = weatherData.condition.toLowerCase();
    if (condition.includes('clear') || condition.includes('sunny') || condition.includes('hot')) {
      return 'bg-gradient-to-br from-red-500 to-yellow-400';
    }
    if (condition.includes('clouds') || condition.includes('humid') || condition.includes('overcast')) {
      return 'bg-gradient-to-br from-gray-500 to-slate-600';
    }
    if (condition.includes('rain') || condition.includes('shower') || condition.includes('thunderstorm')) {
      return 'bg-gradient-to-br from-blue-700 to-indigo-900';
    }
    if (condition.includes('mist') || condition.includes('haze')) {
        return 'bg-gradient-to-br from-gray-400 to-gray-700';
    }
    return 'bg-gradient-to-br from-sky-500 to-cyan-500';
  }, [weatherData]);

  return (
    <div className={`min-h-screen p-4 sm:p-8 flex items-center justify-center font-sans transition-all duration-1000 ${backgroundClass}`}>
      <div className="w-full max-w-6xl">
        <h1 className="mb-10 text-5xl font-extrabold text-center text-white drop-shadow-lg">
          Weather Tracker
        </h1>

        <SearchBar
          searchInput={searchInput}
          setSearchInput={setSearchInput}
          onSearch={handleSearch}
          loading={loading}
        />

        {error && <ErrorMessage error={error} />}

        {!error && (
            loading
            ? <LoadingIndicator city={city} />
            : weatherData
                ? <WeatherDisplay data={weatherData} />
                : <p className="mt-8 text-center text-white text-lg">Search for a city in India to see the current mock weather!</p>
        )}
      </div>
    </div>
  );
};

export default App;