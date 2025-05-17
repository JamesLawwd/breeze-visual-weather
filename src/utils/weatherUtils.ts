
// Types for weather data
export type WeatherCondition = 'sunny' | 'rainy' | 'cloudy' | 'snowy' | 'stormy';

export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  condition: WeatherCondition;
  humidity: number;
  windSpeed: number;
  lastUpdated: string;
}

export interface City {
  name: string;
  country: string;
}

// Mock cities data for search suggestions
export const cities: City[] = [
  { name: "New York", country: "USA" },
  { name: "London", country: "UK" },
  { name: "Paris", country: "France" },
  { name: "Tokyo", country: "Japan" },
  { name: "Sydney", country: "Australia" },
  { name: "Berlin", country: "Germany" },
  { name: "Moscow", country: "Russia" },
  { name: "Dubai", country: "UAE" },
  { name: "San Francisco", country: "USA" },
  { name: "Toronto", country: "Canada" },
  { name: "Singapore", country: "Singapore" },
  { name: "Barcelona", country: "Spain" },
  { name: "Mumbai", country: "India" },
  { name: "Cairo", country: "Egypt" },
  { name: "Rio de Janeiro", country: "Brazil" },
];

// Mock function to simulate API call
export const fetchWeatherData = (city: string): Promise<WeatherData> => {
  return new Promise((resolve) => {
    // Simulate API delay
    setTimeout(() => {
      const conditions: WeatherCondition[] = ['sunny', 'rainy', 'cloudy', 'snowy', 'stormy'];
      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
      const temperature = Math.floor(Math.random() * 35) + 5; // Random temp between 5 and 40
      
      resolve({
        city,
        country: getCityCountry(city) || "Unknown",
        temperature,
        condition: randomCondition,
        humidity: Math.floor(Math.random() * 100),
        windSpeed: Math.floor(Math.random() * 30),
        lastUpdated: new Date().toLocaleTimeString(),
      });
    }, 800);
  });
};

// Helper function to get a country for a city
export const getCityCountry = (cityName: string): string | undefined => {
  const city = cities.find(city => city.name.toLowerCase() === cityName.toLowerCase());
  return city?.country;
};

// Filter cities based on search term
export const searchCities = (searchTerm: string): City[] => {
  if (!searchTerm) return [];
  
  const lowerCaseSearch = searchTerm.toLowerCase();
  return cities
    .filter(city => 
      city.name.toLowerCase().includes(lowerCaseSearch) || 
      city.country.toLowerCase().includes(lowerCaseSearch)
    )
    .slice(0, 5); // Limit to 5 results
};

// Get background gradient based on weather condition
export const getWeatherGradient = (condition: WeatherCondition): string => {
  switch (condition) {
    case 'sunny':
      return 'bg-gradient-sunny';
    case 'rainy':
      return 'bg-gradient-rainy';
    case 'cloudy':
      return 'bg-gradient-cloudy';
    case 'snowy':
      return 'bg-gradient-snowy';
    case 'stormy':
      return 'bg-gradient-stormy';
    default:
      return 'bg-gradient-sunny';
  }
};
