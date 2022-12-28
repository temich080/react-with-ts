import React from 'react';
import {tempParser} from "../../utils/utils";

import {IProps} from "./types";

const Weather: React.FC<IProps> = ({weather}) => {
  return (
    <div>
      {weather &&
          <div>
              <h1>Погода</h1>
              <div>
                  <div>Температура сейчас {tempParser(weather.main.temp)}</div>
                  <div>Ощущается как {tempParser(weather.main.feels_like)}</div>
                  <div>{weather.weather[0].description}</div>
                  <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt=""/>
                  <div>давление {weather.main.pressure}</div>
                  <div>влажность {weather.main.humidity}</div>
                  <div>
                      Ветер
                      <div>speed {weather.wind.speed}</div>
                      <div>deg {weather.wind.deg}</div>
                  </div>
              </div>
          </div>}
    </div>
  );
};

export default Weather;