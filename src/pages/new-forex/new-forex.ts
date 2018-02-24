import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UnknowndatatwoProvider } from '../../providers/unknowndatatwo/unknowndatatwo';
import { Chart } from 'chart.js';
/**
 * Generated class for the NewForexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-forex',
  templateUrl: 'new-forex.html',
})
export class NewForexPage {
  lineChart: any;
@ViewChild('lineCanvas') lineCanvas;
  min: any;
  max: any;
  database_code: string;
  open_price: string;
  data: any[];
  volume: number;
  change: string;
  name: string;
  Unknowndatatwos: { name: string, data: Array<any>, change: string, database_code: string, open_price:string, volume: number }[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public udtS: UnknowndatatwoProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewForexPage');
  }

  ionViewWillEnter() {

    this.Unknowndatatwos = this.udtS.getUnknowndatatwos();
    console.log(this.Unknowndatatwos);
    
    this.name = this.Unknowndatatwos[0].name.substring(26,36);
    this.change = this.Unknowndatatwos[0].change;
    this.volume = this.Unknowndatatwos[0].volume;
    this.open_price = this.Unknowndatatwos[0].open_price;
    this.data = this.Unknowndatatwos[0].data;
    this.database_code = this.Unknowndatatwos[0].database_code;

    var date_arr = [];
    var price_arr = [];
    var data = this.Unknowndatatwos[0].data;
    for (var i = 0; i < data.length; i++) {
      // console.log(data[i]);
      var date = data[i][0].substring(5, 10);
      date_arr.push(date);
      var price = data[i][1];
      price_arr.push(price);
      var high_price = data[1][2];
      var low_price = data[1][3];
      // this.highest_price = high_price;
      // this.lowest_price = low_price;

      // var closingprice = data[1][4];
      // this.closingprice = closingprice;
      
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
