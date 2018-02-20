console.log( "******** http.service.ts ******** " );

import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

import { api_keys } from "/Users/ruslansuvorov/box/staticcontent/apikeys"

@Injectable()
export class HttpService {

  constructor( private _http: HttpClient ) {
    // this.get_seattle;
  }

  get_seattle(){
    let seattle = this._http.get( "http://api.openweathermap.org/data/2.5/weather?q=Seattle,us" + "&" + "units=imperial" + api_keys.openWeatherMapAPI );
    return seattle;
  }

  get_sanjose(){
    let sanjose = this._http.get( "http://api.openweathermap.org/data/2.5/weather?q=San Jose,us" + "&" + "units=imperial" + api_keys.openWeatherMapAPI );
    return sanjose;
  }


}

