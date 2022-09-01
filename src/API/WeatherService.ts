import axios from "axios";
import {IWeather} from "../types/types";
const APPID = '00165d6cd87f21ef4cc7d615ebd9dc62';

export default class WeatherService {
    static async getCurrentWeatherData(lat = '', lon = '') {
        const response = await axios.get<IWeather>('https://api.openweathermap.org/data/2.5/weather', {
            params: {
                lat,
                lon,
                appid: APPID,
                units: 'metric',
                lang: 'ru'
            }
        });
        return response;
    }
}
