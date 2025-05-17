
import { CloudSun, CloudRain, CloudSnow, Sun, Cloud } from "lucide-react";
import { WeatherCondition } from "../utils/weatherUtils";

interface WeatherIconProps {
  condition: WeatherCondition;
  size?: number;
  className?: string;
}

const WeatherIcon = ({ condition, size = 24, className = '' }: WeatherIconProps) => {
  const getIcon = () => {
    switch (condition) {
      case 'sunny':
        return <Sun size={size} className={`text-yellow-400 ${className}`} />;
      case 'rainy':
        return <CloudRain size={size} className={`text-blue-400 ${className}`} />;
      case 'cloudy':
        return <Cloud size={size} className={`text-gray-400 ${className}`} />;
      case 'snowy':
        return <CloudSnow size={size} className={`text-blue-200 ${className}`} />;
      case 'stormy':
        return <CloudRain size={size} className={`text-indigo-600 ${className}`} />;
      default:
        return <CloudSun size={size} className={`text-yellow-400 ${className}`} />;
    }
  };

  return (
    <div className="inline-flex items-center justify-center">
      {getIcon()}
    </div>
  );
};

export default WeatherIcon;
