import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Moon, Sun, Cloud, AlertCircle } from 'lucide-react';
import { SearchBar } from './components/SearchBar';
import { WeatherCard } from './components/WeatherCard';
import { SkeletonLoader } from './components/SkeletonLoader';

function App() {
  const [theme, setTheme] = useState('light');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const fetchWeather = async (location) => {
    setLoading(true);
    setError(null);
    try {
      const { latitude, longitude, name } = location;
      const response = await axios.get(`http://localhost:5000/api/weather?lat=${latitude}&lon=${longitude}&city=${name}`);
      setWeatherData(response.data);
    } catch (err) {
      setError(err.response?.data?.error || 'Failed to fetch weather data. Please make sure the backend server is running.');
    } finally {
      setLoading(false);
    }
  };

  // Default city on load
  useEffect(() => {
    fetchWeather({ latitude: 51.5085, longitude: -0.1257, name: 'London' });
  }, []);

  return (
    <div className="app-container">
      <nav className="glass-nav navbar">
        <div className="logo">
          <Cloud color="#3b82f6" fill="#3b82f6" />
          <span>Atmos</span>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
        </button>
      </nav>

      <main className="main-content">
        <SearchBar onSearch={fetchWeather} />

        {loading ? (
          <SkeletonLoader />
        ) : error ? (
          <div className="glass empty-state">
            <AlertCircle size={48} className="error-text" style={{ marginBottom: '1rem' }} />
            <h3 className="error-text">Oops! Something went wrong</h3>
            <p>{error}</p>
          </div>
        ) : weatherData ? (
          <WeatherCard data={weatherData} />
        ) : (
          <div className="glass empty-state">
            <Cloud size={64} className="empty-icon" />
            <h3>No Weather Data</h3>
            <p>Search for a city above to see current conditions and forecasts.</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
