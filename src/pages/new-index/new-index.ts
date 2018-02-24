import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnknownDataService } from '../../providers/unknowData/unknownData.services';
import { Chart } from 'chart.js';
/**
 * Generated class for the NewIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-index',
  templateUrl: 'new-index.html',
})
export class NewIndexPage {
  closingprice: any;
  lowest_price: any;
  highest_price: any;
  min: any;
  max: any;
  volume: number;
  open_price: number;
  database_code: string;
  stockprice_data: any[];
  change: number;
  lineChart: any;
  name: string;
  @ViewChild('lineCanvas') lineCanvas;

  private unknowndatas: { name: string, data: Array<any>, change: number, database_code: string, volume: number, open_price: number }[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public udS: UnknownDataService
  ) {
  }

  ionViewWillEnter() {
    this.unknowndatas = this.udS.getUnknownDatas();
    console.log(this.unknowndatas);

    this.name = this.unknowndatas[0].name;
    this.change = this.unknowndatas[0].change;
    this.database_code = this.unknowndatas[0].database_code;
    this.open_price = this.unknowndatas[0].open_price;
    this.volume = this.unknowndatas[0].volume;
    this.stockprice_data = this.unknowndatas[0].data;
    var date_arr = [];
    var price_arr = [];
    var data = this.unknowndatas[0].data;
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i]);
      var date = data[i][0].substring(5, 10);
      date_arr.push(date);
      var price = data[i][1];
      price_arr.push(price);
      var high_price = data[1][2];
      var low_price = data[1][3];
      this.highest_price = high_price;
      this.lowest_price = low_price;

      var closingprice = data[1][4];
      this.closingprice = closingprice;
      
    }

    var reverse_date_arr = date_arr.reverse();
    var reverse_price_arr = price_arr.reverse();

    var max = Math.max.apply(null, reverse_price_arr);
    this.max = max;
    var min_arr = [];
    for (var i = 0; i < reverse_price_arr.length; i++) {
      if (reverse_price_arr[i] > 0) {
        min_arr.push(reverse_price_arr[i]);
      }
    }
    var min = Math.min.apply(null, min_arr);
    this.min = min;

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: 'line',
      data: {
        labels: reverse_date_arr,
        datasets: [
          {
            label: this.database_code,
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'round',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: reverse_price_arr,
            spanGaps: true,
          }
        ]
      }

    });

  }
}
