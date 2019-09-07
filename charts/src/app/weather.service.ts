import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class WeatherService {

  constructor(private http: HttpClient) { }

  getDailyWeather() {
    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?id=5117451&APPID=8ed1449ff98e87543395c761d08d0936');
  }
}
