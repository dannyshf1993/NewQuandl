import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FinancialProvider } from '../../providers/financial/financial';
import { Chart } from 'chart.js';
import { NewsProvider } from '../../providers/news/news';

// @Page({
//   templateUrl: 'build/pages/home/home.html',
//   providers: [PeopleServiceProvider]
// })
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [FinancialProvider, NewsProvider]
})
export class HomePage {
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
    public financialService: FinancialProvider,
    public newsService: NewsProvider) {
    // this.loadPeople();
    this.segment = 'articles';
    this.items = [
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
      { expanded: false },
    ];
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

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  ionViewWillEnter() {
    this.newsService.load()
      .then(data => {
        console.log(data);
        this.description = data.articles;
        console.log(this.description);

        // for (var i = 0; i < data.articles.length; i++) {
        //   this.description = data.articles[i];
        //   console.log(this.description);
        // }

      });
  }


  onclickMarkets() {
    var arr = [];
    var arry = [];
    this.financialService.load()
      .then(data => {
        this.data = data.dataset.data;
        this.name = data.dataset.name;

        for (var i = 0; i < this.data.length; i++) {
          var info = this.data[i];
          arr.push(info[0]);
          arry.push(info[1]);
        }

        var arr_reverse = arr.reverse();
        var arry_reverse = arry.reverse();

        this.arr_reverse = arr_reverse;
        this.arry_reverse = arry_reverse;
        this.dated = arr_reverse;
        this.priced = arry_reverse;


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
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
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

    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          hoverBackgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#FF6384",
            "#36A2EB",
            "#FFCE56"
          ]
        }]
      }

    });
  }




}