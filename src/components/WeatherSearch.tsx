
import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { City } from "../utils/weatherUtils";

interface WeatherSearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  suggestions: City[];
  fetchWeather: (city: string) => void;
  isLoading: boolean;
}

const WeatherSearch = ({ 
  searchTerm, 
  setSearchTerm, 
  suggestions, 
  fetchWeather,
  isLoading
}: WeatherSearchProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current && 
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCitySelect = (city: City) => {
    fetchWeather(city.name);
    setSearchTerm(city.name);
    setIsFocused(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      fetchWeather(searchTerm);
    }
  };

  return (
    <div className="relative w-full max-w-md mx-auto">
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            placeholder="Search for a city..."
            className="w-full px-4 py-3 pl-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
          />
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/70">
            <Search size={18} />
          </div>
          {isLoading && (
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <div className="animate-spin h-4 w-4 border-2 border-white/70 border-t-transparent rounded-full"></div>
            </div>
          )}
        </div>
      </form>

      {isFocused && suggestions.length > 0 && (
        <div 
          ref={suggestionsRef}
          className="absolute mt-1 w-full bg-white/20 backdrop-blur-md rounded-lg shadow-lg border border-white/30 z-10 max-h-60 overflow-auto glass-card animate-weather-fade-in"
        >
          <ul>
            {suggestions.map((city, index) => (
              <li 
                key={index} 
                className="px-4 py-2 hover:bg-white/20 cursor-pointer transition-colors text-white"
                onClick={() => handleCitySelect(city)}
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default WeatherSearch;
