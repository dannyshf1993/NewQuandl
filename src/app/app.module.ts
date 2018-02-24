import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FinancialProvider } from '../providers/financial/financial';
import { NewsProvider } from '../providers/news/news';
import { HttpClientModule } from '@angular/common/http';
import { MarketPage } from '../pages/market/market';
import { ExpandableComponent } from '../components/expandable/expandable';
import { EnergyPage } from '../pages/energy/energy';
import { EpPage } from '../pages/ep/ep';
import { FacPage } from '../pages/fac/fac';
import { FcPage } from '../pages/fc/fc';
import { FinancialsPage } from '../pages/financials/financials';
import { ImPage } from '../pages/im/im';
import { InvestingPage } from '../pages/investing/investing';
import { LatestnewsPage } from '../pages/latestnews/latestnews';
import { PfPage } from '../pages/pf/pf';
import { RePage } from '../pages/re/re';
import { RetailPage } from '../pages/retail/retail';
import { RetirementPage } from '../pages/retirement/retirement';
import { SectorWatchPage } from '../pages/sector-watch/sector-watch';
import { SmPage } from '../pages/sm/sm';
import { TechnologyPage } from '../pages/technology/technology';
import { VideosPage } from '../pages/videos/videos';
import { UsPage } from '../pages/us/us';
import { EuropePage } from '../pages/europe/europe';
import { AsiaPage } from '../pages/asia/asia';
import { FxPage } from '../pages/fx/fx';
import { RatesPage } from '../pages/rates/rates';
import { FuturesPage } from '../pages/futures/futures';
import { UsProvider } from '../providers/us/us';
import { UkProvider } from '../providers/uk/uk';
import { EuropeProvider } from '../providers/europe/europe';
import { TechProvider } from '../providers/tech/tech';
import { AsiaProvider } from '../providers/asia/asia';
import { UstojpyforexProvider } from '../providers/ustojpyforex/ustojpyforex';
import { UstohkdforexProvider } from '../providers/ustohkdforex/ustohkdforex';
import { BitcoinProvider } from '../providers/bitcoin/bitcoin';
import { RatesProvider } from '../providers/rates/rates';
import { OilFuturesProvider } from '../providers/oil-futures/oil-futures';
import { FinancialTimesProvider } from '../providers/financial-times/financial-times';
import { NewIndexPage } from '../pages/new-index/new-index';
import { UnknownDataService } from '../providers/unknowData/unknownData.services';
import { USforexProvider } from '../providers/u-sforex/u-sforex';
import { UnknowndatatwoProvider } from '../providers/unknowndatatwo/unknowndatatwo';
import { NewForexPage } from '../pages/new-forex/new-forex';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MarketPage,
    EnergyPage,
    EpPage,
    FacPage,
    FcPage,
    FinancialsPage,
    ImPage,
    InvestingPage,
    LatestnewsPage,
    MarketPage,
    PfPage,
    RePage,
    RePage,
    RetailPage,
    RetirementPage,
    SectorWatchPage,
    SmPage,
    TechnologyPage,
    VideosPage,
    UsPage,
    EuropePage,
    AsiaPage,
    FxPage,
    RatesPage,
    FuturesPage,
    NewIndexPage,
    NewForexPage,
    ExpandableComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MarketPage,
    EnergyPage,
    EpPage,
    FacPage,
    FcPage,
    FinancialsPage,
    ImPage,
    InvestingPage,
    LatestnewsPage,
    MarketPage,
    PfPage,
    RePage,
    RePage,
    RetailPage,
    RetirementPage,
    SectorWatchPage,
    SmPage,
    TechnologyPage,
    VideosPage,
    UsPage,
    EuropePage,
    AsiaPage,
    FxPage,
    RatesPage,
    FuturesPage,
    NewIndexPage,
    NewForexPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FinancialProvider,
    NewsProvider,
    UsProvider,
    UkProvider,
    EuropeProvider,
    TechProvider,
    UsProvider,
    AsiaProvider,
    UstojpyforexProvider,
    UstohkdforexProvider,
    BitcoinProvider,
    RatesProvider,
    OilFuturesProvider,
    FinancialTimesProvider,
    UnknownDataService,
    USforexProvider,
    UnknowndatatwoProvider
  ]
})
export class AppModule {}
