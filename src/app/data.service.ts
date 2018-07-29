import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {



  constructor(public http: HttpClient) {

  }


  getCity(city: string, country: string) {

    return this.http.get('http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',' + country + '&mode=json&appid=5121f13fd90c7f33f764109bcfc0c9fd')
    //.map(res =>res.json());



  }


}
