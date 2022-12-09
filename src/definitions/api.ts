export interface IWeatherDto {
  coord:      Coord;
  weather:    Weather[];
  base:       string;
  main:       Main;
  visibility: number;
  wind:       Wind;
  clouds:     Clouds;
  dt:         number;
  sys:        Sys;
  timezone:   number;
  id:         number;
  name:       string;
  cod:        number;
}


//убрать дубли
export interface IUser {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}

export interface IPost {
  userId: number;
  id:     number;
  title:  string;
  body:   string;
}

export interface IComment {
  postId: number;
  id:     number;
  name:  string;
  email:  string;
  body:   string;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  temp:       number;
  feels_like: number;
  temp_min:   number;
  temp_max:   number;
  pressure:   number;
  humidity:   number;
}

export interface Sys {
  type:    number;
  id:      number;
  sunrise: number;
  sunset:  number;
}

export interface Weather {
  id:          number;
  main:        string;
  description: string;
  icon:        string;
}

export interface Wind {
  speed: number;
  deg:   number;
  gust:  number;
}