import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Chart } from 'chart.js';
import { FinancialProvider } from '../../providers/financial/financial';
import { NewsProvider } from '../../providers/news/news';
import { RatesProvider } from '../../providers/rates/rates';
import { NewIndexPage } from '../new-index/new-index';
import { USforexProvider } from '../../providers/u-sforex/u-sforex';
import { UsProvider } from '../../providers/us/us';
import { UkProvider } from '../../providers/uk/uk';
import { UnknownDataService } from '../../providers/unknowData/unknownData.services';
/**
 * Generated class for the RatesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rates',
  templateUrl: 'rates.html',
})
export class RatesPage {
  n: any;
  latestvol: any;
  arryvol_reverse: any[];
  unshowndata_arr: any[];
  unshownname: any;
  unshowndata: any;
  largestvalue: any;
  smallestvalue: any;

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
    public financialService: UsProvider,
    public newsService: UkProvider,
    public navCtrl: NavController,
    public udS: UnknownDataService,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController
  ) {
    this.presentLoadingDefault();
    // this.loadPeople();
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


  onFOREX() {
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
        // console.log(unshowndata_arr);

        this.unshowndata_arr = unshowndata_arr;
        for (var i = 0; i < unshowndata_arr.length; i++) {
          //the latest date's index data
          // console.log(unshowndata_arr[i].data[0]);
          var latest = unshowndata_arr[i].data[0];
          var latestvol = latest[7];
          var latestprice = latest[1];
          var latestchange = latest[5];

          //add a new property "volume" to the four indices' array so that we can show the volume of each index on the client page
          unshowndata_arr[i]["volume"] = latestvol;
          //add a new property "open_price" to the four indices' array so that we can show the latest stock price of each index on the client page
          unshowndata_arr[i]["open_price"] = latestprice;
          //add a new property "%change" to the four indices' array so that we can show the %change of each index on the client page
          unshowndata_arr[i]["change"] = latestchange;

        }
        // console.log(unshowndata_arr);
        //////for the shown NASDAQ data only //        
        this.data = data[4].dataset.data;
        this.name = data[4].dataset.name;

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

      });


  }
  ionViewWillEnter() {
    var arr = [];
    var arry = [];
    var arryvol = [];
    this.financialService.load()
      .then(data => {
        console.log(data);
        //for unshown data indices only
        var unshowndata_arr = [];
        for (var i = 0; i < data.length - 1; i++) {
          var unshownname = data[i].dataset;
          unshowndata_arr.push(unshownname);
        }
        // console.log(unshowndata_arr);
        this.unshowndata_arr = unshowndata_arr;
        for (var i = 0; i < unshowndata_arr.length; i++) {
          //the latest date's index data
          // console.log(unshowndata_arr[i].data[0]);
          var latest = unshowndata_arr[i].data[0];
          var latestvol = latest[7];
          var latestprice = latest[1];
          var latestchange = latest[5];
          //add a new property "volume" to the four indices' array so that we can show the volume of each index on the client page
          unshowndata_arr[i]["volume"] = latestvol;
          //add a new property "open_price" to the four indices' array so that we can show the latest stock price of each index on the client page
          unshowndata_arr[i]["open_price"] = latestprice;
          //add a new property "%change" to the four indices' array so that we can show the %change of each index on the client page
          unshowndata_arr[i]["change"] = latestchange;
        }
        // console.log(unshowndata_arr);
        //////for the shown NASDAQ data only //        
        this.data = data[4].dataset.data;
        this.name = data[4].dataset.name;

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
    
    
      });

    this.newsService.load()
      .then(data => {
        this.description = data.articles;
      });


  }

  onclickMarkets() {
    var arr = [];
    var arry = [];
    this.financialService.load()
      .then(data => {
        this.data = data[4].dataset.data;
        this.name = data[4].dataset.name;

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

    // this.barChart = new Chart(this.barCanvas.nativeElement, {

    //   type: 'bar',
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255,99,132,1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }

    // });

    // this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

    //   type: 'doughnut',
    //   data: {
    //     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       hoverBackgroundColor: [
    //         "#FF6384",
    //         "#36A2EB",
    //         "#FFCE56",
    //         "#FF6384",
    //         "#36A2EB",
    //         "#FFCE56"
    //       ]
    //     }]
    //   }

    // });
  }

  onUnknowndata(n) {
    console.log(n);
    this.udS.addUnknownData(n);
    this.navCtrl.push(NewIndexPage);

  }
}
