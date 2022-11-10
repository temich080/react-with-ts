import * as React from 'react';
import WeatherWidget from '../../ui/WeatherWidget';
import WeatherService from '../../API/WeatherService';
import { IWeatherDto } from '../../definitions/api';

type Props = {
};
type State = {
    weather: IWeatherDto | null;
};

class Weather extends React.Component<Props, State> {
    state = {
        weather: null,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        const payload = [
            '51.6623',
            '39.142202',
        ]

        const weatherRes = await WeatherService.getCurrentWeatherData(...payload);
        this.setState(() => {
            return {
                weather: weatherRes.data,
            };
        });
    }

    render() {
        return (
          <div>
            <h1>Страница погоды</h1>
            <WeatherWidget
                weather={this.state.weather}
            />
          </div>
        );
    };
}

export default Weather;
