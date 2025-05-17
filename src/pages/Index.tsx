
import { useState } from "react";
import WeatherSearch from "@/components/WeatherSearch";
import WeatherDisplay from "@/components/WeatherDisplay";
import WeatherIcon from "@/components/WeatherIcon";
import { useWeatherSearch } from "@/hooks/useWeatherSearch";
import { getWeatherGradient } from "@/utils/weatherUtils";

const Index = () => {
  const {
    searchTerm,
    setSearchTerm,
    suggestions,
    isLoading,
    weatherData,
    fetchWeather
  } = useWeatherSearch();

  // Set up background gradient based on weather condition
  const backgroundClass = weatherData 
    ? getWeatherGradient(weatherData.condition)
    : "bg-gradient-sunny";

  return (
    <div className={`min-h-screen ${backgroundClass} transition-all duration-1000`}>
      <div className="container mx-auto px-4 py-12 md:py-24">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
            Weather<span className="text-white/80">Hub</span>
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-md mx-auto">
            Discover the weather in your city with our beautiful forecasts
          </p>
        </header>

        <div className="max-w-4xl mx-auto">
          {/* Search section */}
          <div className="mb-10 relative z-10">
            <WeatherSearch
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              suggestions={suggestions}
              fetchWeather={fetchWeather}
              isLoading={isLoading}
            />
          </div>

          {/* Weather Display */}
          {weatherData ? (
            <div className="max-w-3xl mx-auto">
              <WeatherDisplay weatherData={weatherData} />
            </div>
          ) : (
            <div className="text-center glass-card p-12 rounded-2xl max-w-xl mx-auto">
              <div className="mb-6 animate-float">
                <WeatherIcon condition="cloudy" size={80} className="mx-auto opacity-80" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-2">
                Search for a city to get started
              </h3>
              <p className="text-white/70">
                Enter any city name to see current weather conditions, 
                temperature, humidity, and more.
              </p>
            </div>
          )}
        </div>

        {/* Decorative elements */}
        <div className="fixed top-10 right-10 animate-float opacity-30 hidden lg:block">
          <WeatherIcon condition="sunny" size={40} />
        </div>
        <div className="fixed bottom-10 left-10 animate-float opacity-30 hidden lg:block" style={{ animationDelay: '1s' }}>
          <WeatherIcon condition="cloudy" size={32} />
        </div>
        <div className="fixed top-1/4 left-1/5 animate-float opacity-20 hidden lg:block" style={{ animationDelay: '2s' }}>
          <WeatherIcon condition="rainy" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Index;
