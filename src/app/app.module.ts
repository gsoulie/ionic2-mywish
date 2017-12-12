import { FormPage } from './../pages/form/form';
import { TabsPage } from './../pages/tabs/tabs';
import { ListWishPage } from './../pages/list-wish/list-wish';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { ListLudoPage } from '../pages/list-ludo/list-ludo';
import { ListWaitPage } from '../pages/list-wait/list-wait';
import { ListNoPage } from '../pages/list-no/list-no';
import { DataProvider } from '../providers/data/data';
import { Config } from '../providers/config/config';
import { ToolProvider } from '../providers/tool/tool';
import { CpoListComponent } from '../components/cpo-list/cpo-list';

// AngularFire2 account settings
export const firebaseConfig = {
  apiKey: "AIzaSyA0ccxnMngkzDM5RQ2Uvv0G7hu5V0Q-RNM",
  authDomain: "mywish-8c67c.firebaseapp.com",
  databaseURL: "https://mywish-8c67c.firebaseio.com",
  projectId: "mywish-8c67c",
  storageBucket: "mywish-8c67c.appspot.com",
  messagingSenderId: "934707222670"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    ListWishPage,
    ListLudoPage,
    TabsPage,
    FormPage,
    CpoListComponent,
    ListWaitPage,
    ListNoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages:"true"}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule	
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ResetPasswordPage,
    SignupPage,
    ListWishPage,
    ListLudoPage,
    TabsPage,
    FormPage,
    CpoListComponent,
    ListWaitPage,
    ListNoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    DataProvider,
    Config,
    ToolProvider
  ]
})
export class AppModule {}
