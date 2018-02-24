import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FinancialProvider } from '../../providers/financial/financial';
import { NewsProvider } from '../../providers/news/news';
import { Chart } from 'chart.js';
import { UstojpyforexProvider } from '../../providers/ustojpyforex/ustojpyforex';
import { USforexProvider } from '../../providers/u-sforex/u-sforex';
import { LoadingController } from 'ionic-angular/components/loading/loading-controller';
import { NewForexPage } from '../new-forex/new-forex';
import { UnknowndatatwoProvider } from '../../providers/unknowndatatwo/unknowndatatwo';
// import { UstohkdforexProvider } from '../../providers/ustohkdforex/ustohkdforex';
/**
 * Generated class for the FxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fx',
  templateUrl: 'fx.html',
})
export class FxPage {
  latestchange_color_arr: any[];
  colors: any[];
  name_arr: any[];
  latestchange_arr: any[];
  largestvalue: any;
  smallestvalue: any;
  arryvol_reverse: any[];
  unshowndata_arr: any[];

  items: any = [];
  itemExpandHeight: number = 50;
  arry_reverse: any[];
  arr_reverse: any[];
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;

  segment: string;
  description: any;
  priced: any[];
  dated: any[];
  name: any;
  data: any;
  barChart: any;
  doughnutChart: any;
  lineChart: any;

  public people: any;

  constructor(
    public usforexService: USforexProvider,
    // public financialustohkdService: UstohkdforexProvider,
    public newsService: NewsProvider,
    public navCtrl: NavController,
    public udtS: UnknowndatatwoProvider,
    public loadingCtrl: LoadingController
  ) {
    // this.loadPeople();
    this.presentLoadingDefault();
    this.segment = 'markets';
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
    ];
  }
  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Click on the graph to see the updated data'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 5000);
  }

  expandItem(item) {
    this.items.map((listItem) => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });

  }

  ionViewWillEnter() {
    this.newsService.load()
      .then(data => {
        this.description = data.articles;

      });

    var arr = [];
    var arry = [];
    var arryvol = [];
    this.usforexService.load()
      .then(data => {

        //for unshown data indices only
        var unshowndata_arr = [];
        for (var i = 0; i < data.length - 1; i++) {
          var unshownname = data[i].dataset;
          unshowndata_arr.push(unshownname);
        }

        this.unshowndata_arr = unshowndata_arr;
        var latestchange_arr = [];
        var name_arr = [];
        //this array is for assigning green color for positive and red color for negative
        var latestchange_color_arr = [];

        for (var i = 0; i < unshowndata_arr.length; i++) {
          name_arr.push(unshowndata_arr[i].name.substring(26, 36));
          //the latest date's index data
          var latest = unshowndata_arr[i].data[0];
          var latestvol = latest[7];
          //corrected to 2 decimal places .toFixed(2)
          var latestprice = latest[1].toFixed(2);
          //percentage change uses the %change of (highest - lowest) of the exhange rate of the latest date
          var latestchange = (latest[2] - latest[3]).toFixed(2);
          //add a new property "volume" to the four indices' array so that we can show the volume of each index on the client page
          unshowndata_arr[i]["volume"] = latestvol;
          //add a new property "open_price" to the four indices' array so that we can show the latest stock price of each index on the client page
          unshowndata_arr[i]["open_price"] = latestprice;
          //add a new property "%change" to the four indices' array so that we can show the %change of each index on the client page
          unshowndata_arr[i]["change"] = latestchange;
          latestchange_color_arr.push(+latestchange);
          latestchange_arr.push(latestchange);
        }
        this.latestchange_color_arr = latestchange_color_arr;
        this.name_arr = name_arr;

        // console.log(unshowndata_arr);
        //////for the shown USDJPY data only //        
        this.data = data[5].dataset.data;
        this.name = data[5].dataset.name;

        for (var i = 0; i < this.data.length; i++) {
          var info = this.data[i];
          var date = info[0].substring(5, 10);
          arr.push(date);
          arry.push(info[1]);
        }

        var arr_reverse = arr.reverse();
        var arry_reverse = arry.reverse();
        var arryvol_reverse = arryvol.reverse();
        this.arr_reverse = arr_reverse;
        this.arry_reverse = arry_reverse;
        this.arryvol_reverse = arryvol_reverse;

        this.latestchange_arr = latestchange_arr;
        var smallest = Math.min.apply(null, arry_reverse);
        var largest = Math.max.apply(null, arry_reverse);
        this.smallestvalue = smallest;
        this.largestvalue = largest;

        this.lineChart = new Chart(this.lineCanvas.nativeElement, {
          type: 'line',
          data: {
            labels: this.arr_reverse,
            datasets: [
              {
                label: "index",
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
                data: this.arry_reverse,
                spanGaps: true,
              }
            ]
          }

        });

        //turn the string of array into number of array
        console.log(this.latestchange_color_arr);

        // var data = this.latestchange_arr;
        var dataa = this.latestchange_color_arr;
        var colors = [];
        for (var i = 0; i < dataa.length; i++) {
          if (dataa[i] < 0) {
            colors[i] = "rgb(255,0,0)";
          } else {
            colors[i] = "rgb(0,255,0)";
          }
        }
        dataa = colors;
        this.colors = colors;
        console.log(colors);

        this.barChart = new Chart(this.barCanvas.nativeElement, {

          type: 'bar',
          data: {
            labels: this.name_arr,
            datasets: [{
              label: 'Intraday Gains',
              data: this.latestchange_arr,
              backgroundColor: this.colors,
              borderColor: this.colors,
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }

        });

      });



  }

  onclickustohkdMarkets() {
  }

  onclickMarkets() {
    var arr = [];
    var arry = [];
    this.usforexService.load()
      .then(data => {
        this.data = data[5].dataset.data;
        this.name = data[5].dataset.name;

        for (var i = 0; i < this.data.length; i++) {
          var info = this.data[i];
          var date = info[0].substring(5, 10);
          arr.push(date);
          arry.push(info[1]);
        }

        var arr_reverse = arr.reverse();
        var arry_reverse = arry.reverse();
        this.arr_reverse = arr_reverse;
        this.arry_reverse = arry_reverse;
        this.dated = arr_reverse;
        this.priced = arry_reverse;

        var smallest = Math.min.apply(null, arry_reverse);
        var largest = Math.max.apply(null, arry_reverse);
        this.smallestvalue = smallest;
        this.largestvalue = largest;

      });

    this.lineChart = new Chart(this.lineCanvas.nativeElement, {

      type: 'line',
      data: {
        labels: this.arr_reverse,
        datasets: [
          {
            label: "index",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(75,192,192,1)",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: this.arry_reverse,
            spanGaps: false,
          }
        ]
      }

    });
    this.barChart = new Chart(this.barCanvas.nativeElement, {

      type: 'bar',
      data: {
        labels: this.name_arr,
        datasets: [{
          label: 'Intraday Gains',
          // data: this.latestchange_arr,
          data: this.latestchange_color_arr,
          backgroundColor: this.colors,
          borderColor: this.colors,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }

    });




  }

  onUnknowndata(n) {
    console.log(n);
    this.udtS.addUnknowndatatwos(n);
    this.navCtrl.push(NewForexPage);

  }


}

