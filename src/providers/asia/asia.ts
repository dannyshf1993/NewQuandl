import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';

/*
  Generated class for the AsiaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class AsiaProvider {
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
      // HSBC stock 
      // https://www.quandl.com/api/v3/datasets/XHKG/00005.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2007-06-02

      let HSI = this.http.get('https://www.quandl.com/api/v3/datasets/CHRIS/HKEX_HSI1.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2017-01-01');
      let Nikkei1 = this.http.get('https://www.quandl.com/api/v3/datasets/CHRIS/SGX_NK1.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2015-02-11');
      let CME = this.http.get('https://www.quandl.com/api/v3/datasets/CME/NKZ2017.json?api_key=bu-H-_xeqhTLq7d45o_p');
      let Nikkei2 = this.http.get('https://www.quandl.com/api/v3/datasets/CHRIS/SGX_NK2.json?api_key=bu-H-_xeqhTLq7d45o_p');
      // let HSI = this.http.get('https://www.quandl.com/api/v3/datasets/CHRIS/HKEX_HSI1.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2017-01-01');
      // let HSI = this.http.get('https://www.quandl.com/api/v3/datasets/CHRIS/HKEX_HSI1.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2017-01-01');

      forkJoin([HSI, Nikkei1, CME, Nikkei2])
        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);

        });
    });
  }
}
