
import { WeatherData } from "../utils/weatherUtils";
import WeatherIcon from "./WeatherIcon";

interface WeatherDisplayProps {
  weatherData: WeatherData;
}

const WeatherDisplay = ({ weatherData }: WeatherDisplayProps) => {
  const { city, country, temperature, condition, humidity, windSpeed, lastUpdated } = weatherData;

  return (
    <div className="animate-weather-fade-in">
      <div className="glass-card rounded-2xl p-6 md:p-8 text-white text-center md:text-left">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-1">{city}</h2>
            <p className="text-xl text-white/80 mb-4">{country}</p>
            
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <WeatherIcon condition={condition} size={48} />
              <div className="text-5xl font-bold">{temperature}°</div>
            </div>
            
            <p className="text-xl capitalize mb-1">{condition}</p>
            <p className="text-sm text-white/70">Last updated: {lastUpdated}</p>
          </div>
          
          <div className="mt-6 md:mt-0">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 text-center">
              <div>
                <p className="text-white/70">Humidity</p>
                <p className="text-xl font-medium">{humidity}%</p>
              </div>
              <div>
                <p className="text-white/70">Wind</p>
                <p className="text-xl font-medium">{windSpeed} km/h</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;
