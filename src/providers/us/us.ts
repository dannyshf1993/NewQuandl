import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs/observable/forkJoin';

/*
  Generated class for the UsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UsProvider {

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

      let goldfutures = this.http.get('https://www.quandl.com/api/v3/datasets/CME/GCZ2018.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2017-01-01');
      let silverfutures = this.http.get('https://www.quandl.com/api/v3/datasets/CME/SIZ2018.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2016-01-01');
      let SP500futures = this.http.get('https://www.quandl.com/api/v3/datasets/CHRIS/CME_SP1.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2017-01-01');
      let NASDAQ = this.http.get('https://www.quandl.com/api/v3/datasets/NASDAQOMX/XQC.json?api_key=bu-H-_xeqhTLq7d45o_p')
      // let EURUSD = this.http.get('https://www.quandl.com/api/v3/datasets/CURRFX/USDJPY.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2015-02-09');
      // let AUDUSD = this.http.get('https://www.quandl.com/api/v3/datasets/CURRFX/AUDUSD.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2015-02-09');
      // let GBPUSD = this.http.get('https://www.quandl.com/api/v3/datasets/CURRFX/GBPUSD.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2015-02-09');
      // let USDCAD = this.http.get('https://www.quandl.com/api/v3/datasets/CURRFX/USDCAD.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2015-02-09');
      // let USDJPY = this.http.get('https://www.quandl.com/api/v3/datasets/CURRFX/USDJPY.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2015-02-09');
      // let USDCHF = this.http.get('https://www.quandl.com/api/v3/datasets/CURRFX/USDCHF.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2015-02-09');

      //oil futures is put at the end so that the array can be rendered without rearranging the multiple APIs 
      let oilfutures = this.http.get('https://www.quandl.com/api/v3/datasets/ICE/BF2018.json?api_key=bu-H-_xeqhTLq7d45o_p&start_date=2016-08-01');

      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      forkJoin([oilfutures, goldfutures, silverfutures, SP500futures, NASDAQ])

        // We're using Angular HTTP provider to request the data,
        // then on the response, it'll map the JSON data to a parsed JS object.
        // Next, we process the data and resolve the promise with the new data.

        .subscribe(data => {
          // we've got back the raw data, now generate the core schedule data
          // and save the data for later reference
          this.data = data;
          resolve(this.data);
          console.log(this.data);

        });
    });
  }
}
