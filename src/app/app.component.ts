import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MarketPage } from '../pages/market/market';
import { LatestnewsPage } from '../pages/latestnews/latestnews';
import { InvestingPage } from '../pages/investing/investing';
import { FacPage } from '../pages/fac/fac';
import { EpPage } from '../pages/ep/ep';
import { PfPage } from '../pages/pf/pf';
import { RetirementPage } from '../pages/retirement/retirement';
import { RePage } from '../pages/re/re';
import { TechnologyPage } from '../pages/technology/technology';
import { EnergyPage } from '../pages/energy/energy';
import { FinancialsPage } from '../pages/financials/financials';
import { RetailPage } from '../pages/retail/retail';
import { FcPage } from '../pages/fc/fc';
import { ImPage } from '../pages/im/im';
import { SmPage } from '../pages/sm/sm';
import { VideosPage } from '../pages/videos/videos';
import { SectorWatchPage } from '../pages/sector-watch/sector-watch';
import { FuturesPage } from '../pages/futures/futures';
import { RatesPage } from '../pages/rates/rates';
import { FxPage } from '../pages/fx/fx';
import { AsiaPage } from '../pages/asia/asia';
import { UsPage } from '../pages/us/us';
import { EuropePage } from '../pages/europe/europe';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  items: any = [];
  itemsOne: any = [];
  itemsTwo: any = [];
  itemExpandeHeight: number = 150;
  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  pagesOne: Array<{title: string, component: any}>;
  pagesTwo: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen,
  
  ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Top Stories', component: HomePage },
      { title: 'Latest News', component: LatestnewsPage },
      { title: 'Markets', component: MarketPage },
      { title: 'Investing', component: InvestingPage },
      { title: 'Financial Adviser Center', component: FacPage },
      { title: 'Economy/Polices', component: EpPage },
      { title: 'Personal Finance', component: PfPage },
      { title: 'Retirement', component: RetirementPage },
      { title: 'Real Estate', component: RePage },
      { title: 'Technology', component: TechnologyPage },
      { title: 'Energy', component: EnergyPage },
      { title: 'Financials', component: FinancialsPage },
      { title: 'Retails', component: RetailPage },
      { title: 'Futures/Commodities', component: FcPage },
      { title: 'International Markets', component: ImPage },
      { title: 'Stocks Movers', component: SmPage },
      { title: 'Videos', component: VideosPage },
      { title: 'SectorWatch', component: SectorWatchPage },
    ];
    this.pagesOne = [  
      { title: 'U.S.', component: UsPage },
      { title: 'Europe', component: EuropePage },
      { title: 'Asia', component: AsiaPage },
      { title: 'FX', component: FxPage },
      { title: 'Rates', component: RatesPage },
      { title: 'Futures', component: FuturesPage },
    ];
    this.pagesTwo = [
      { title: 'Market', component: MarketPage },
    ];
    
    this.items = [
      {expanded: false},
    ];
    this.itemsOne = [
      {expanded: false},
    ];
    this.itemsTwo = [
      {expanded: false},
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

  expandedItemOne(item) {
    this.itemsOne.map((listItem) => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }

  expandedItemTwo(item) {
    this.itemsTwo.map((listItem) => {
      if (item == listItem) {
        listItem.expanded = !listItem.expanded;
      } else {
        listItem.expanded = false;
      }
      return listItem;
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
