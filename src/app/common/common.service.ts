import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  getWeatherInfo() {
    //return this.http.get('/api/weatherInfo');
  }

  sayHello(name?: string) {
    return name + ' Hi!!!';
  }
}
