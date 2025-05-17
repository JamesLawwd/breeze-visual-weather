
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
  // Added African cities
  { name: "Lagos", country: "Nigeria" },
  { name: "Nairobi", country: "Kenya" },
  { name: "Accra", country: "Ghana" },
  { name: "Johannesburg", country: "South Africa" },
  { name: "Cape Town", country: "South Africa" },
  { name: "Addis Ababa", country: "Ethiopia" },
  { name: "Dar es Salaam", country: "Tanzania" },
  { name: "Casablanca", country: "Morocco" },
  { name: "Khartoum", country: "Sudan" },
  { name: "Algiers", country: "Algeria" },
  { name: "Tunis", country: "Tunisia" },
  { name: "Dakar", country: "Senegal" },
  { name: "Abidjan", country: "Ivory Coast" },
  { name: "Kampala", country: "Uganda" },
  { name: "Harare", country: "Zimbabwe" },
  { name: "Lusaka", country: "Zambia" },
  { name: "Kigali", country: "Rwanda" },
  { name: "Luanda", country: "Angola" },
  { name: "Maputo", country: "Mozambique" },
  { name: "Windhoek", country: "Namibia" }
];

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

// Helper function to get a country for a city
export const getCityCountry = (cityName: string): string | undefined => {
  const city = cities.find(city => city.name.toLowerCase() === cityName.toLowerCase());
  return city?.country;
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
