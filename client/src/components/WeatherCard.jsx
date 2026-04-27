import React from 'react';
import { 
  CloudRain, 
  Wind, 
  Droplets, 
  Sun, 
  Cloud, 
  CloudLightning,
  Snowflake,
  ThermometerSun
} from 'lucide-react';

// Helper to map WMO Weather codes to icons and descriptions
const getWeatherIcon = (code, isDay = 1) => {
  if (code === 0) return { icon: <Sun size={64} />, desc: 'Clear sky' };
  if (code === 1 || code === 2 || code === 3) return { icon: <Cloud size={64} />, desc: 'Partly cloudy' };
  if (code >= 45 && code <= 48) return { icon: <Cloud size={64} />, desc: 'Fog' };
  if (code >= 51 && code <= 67) return { icon: <CloudRain size={64} />, desc: 'Rain' };
  if (code >= 71 && code <= 77) return { icon: <Snowflake size={64} />, desc: 'Snow' };
  if (code >= 80 && code <= 82) return { icon: <CloudRain size={64} />, desc: 'Rain showers' };
  if (code >= 85 && code <= 86) return { icon: <Snowflake size={64} />, desc: 'Snow showers' };
  if (code >= 95) return { icon: <CloudLightning size={64} />, desc: 'Thunderstorm' };
  return { icon: <Sun size={64} />, desc: 'Unknown' };
};

export const WeatherCard = ({ data }) => {
  if (!data || !data.current) return null;

  const { current, location, daily } = data;
  const weatherInfo = getWeatherIcon(current.weatherCode, current.isDay);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
  };

  return (
    <div className="weather-dashboard">
      <div className="location-header">
        <h2 className="location-name">{location}</h2>
        <p className="location-date">{formatDate(current.time)}</p>
      </div>

      <div className="current-weather">
        <div className="glass main-card">
          {weatherInfo.icon}
          <h1 className="temp-large">{Math.round(current.temperature)}°C</h1>
          <p className="weather-desc">{weatherInfo.desc}</p>
        </div>

        <div className="details-grid">
          <div className="glass detail-item">
            <ThermometerSun className="detail-icon" size={32} />
            <div className="detail-info">
              <h4>Feels Like</h4>
              <p>{Math.round(current.feelsLike)}°C</p>
            </div>
          </div>
          
          <div className="glass detail-item">
            <Droplets className="detail-icon" size={32} />
            <div className="detail-info">
              <h4>Humidity</h4>
              <p>{current.humidity}%</p>
            </div>
          </div>
          
          <div className="glass detail-item">
            <Wind className="detail-icon" size={32} />
            <div className="detail-info">
              <h4>Wind Speed</h4>
              <p>{current.windSpeed} km/h</p>
            </div>
          </div>
          
          <div className="glass detail-item">
            <CloudRain className="detail-icon" size={32} />
            <div className="detail-info">
              <h4>Precipitation</h4>
              <p>{current.precipitation} mm</p>
            </div>
          </div>
        </div>
      </div>

      {daily && daily.length > 0 && (
        <div className="forecast-section">
          <h3 className="forecast-title">7-Day Forecast</h3>
          <div className="forecast-grid">
            {daily.map((day, index) => {
              if (index === 0) return null; // Skip today
              const dayIcon = getWeatherIcon(day.weatherCode);
              return (
                <div key={index} className="glass forecast-card">
                  <span className="forecast-date">
                    {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                  </span>
                  {React.cloneElement(dayIcon.icon, { size: 32 })}
                  <div className="forecast-temps">
                    <span>{Math.round(day.maxTemp)}°</span>
                    <span className="forecast-min">{Math.round(day.minTemp)}°</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
