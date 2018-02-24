import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UstojpyforexProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UstojpyforexProvider {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello PeopleServiceProvider Provider');
  }

  load() {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      //the data range from 1/1/2016 to 31/12/2016
      this.http.get('https://www.quandl.com/api/v3/datasets/CUR/JPY.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2016-01-01')

          .subscribe(data => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            this.data = data;
            resolve(this.data);

          });
    });
  }

}
