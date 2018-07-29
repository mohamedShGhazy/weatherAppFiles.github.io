import { Component } from '@angular/core';

import { DataService } from './data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  city: string;
  country: string;
  weather: any;
  titleClass: string
  myButton: string;


  constructor(private dataService: DataService) {

  }

  /* ********************** Get City value ******************************************** */

  selectCity(event: any) {
    this.city = event.target.value;
    this.getData(this.city, 'us');

  }

    /* ********************** Get Country value ******************************************** */


  selectCountry(event: any) {
    this.country = event.target.value;
    this.getData(this.city, this.country);

  }



  ngOnInit() {

    // this.getData(this.city,this.country);

  }

  /********************************************** Get weather using  selected value ********************************************************/
  getData(city: string, country: string) {

    this.dataService.getCity(city, country).subscribe(res => {
      //console.log(res)
      this.weather = res;
      //console.log('this.weather ',this.weather)
      /*for(let dts of this.weather.list){
        console.log( dts.dt)
      }*/
    })
  }

  /********************************* Changing Style method ***************************************** */
  changeStyle() {



    if (this.titleClass === "style") {
      this.myButton = "L"

      this.titleClass = ""
    } else {

      this.titleClass = "style"

      this.myButton = "G"

    }


  }


}
