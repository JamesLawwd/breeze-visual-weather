
import { useState, useEffect } from 'react';
import { useDebounce } from './useDebounce';
import { City, searchCities, fetchWeatherData, WeatherData } from '../utils/weatherUtils';

export const useWeatherSearch = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [suggestions, setSuggestions] = useState<City[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  // Update suggestions based on search term
  useEffect(() => {
    if (debouncedSearchTerm) {
      const results = searchCities(debouncedSearchTerm);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  }, [debouncedSearchTerm]);

  // Function to fetch weather data for a selected city
  const fetchWeather = async (city: string) => {
    try {
      setIsLoading(true);
      const data = await fetchWeatherData(city);
      setWeatherData(data);
      setIsLoading(false);
      // Clear suggestions after selection
      setSuggestions([]);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setIsLoading(false);
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
    isLoading,
    weatherData,
    fetchWeather
  };
};
