import { AuthProvider } from './../../providers/auth/auth';
import { NavController, LoadingController } from 'ionic-angular';
import { Config } from './../../providers/config/config';
import { Component, Input, OnInit } from '@angular/core';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { FormPage } from '../../pages/form/form';
import { DataProvider } from '../../providers/data/data';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { LoginPage } from '../../pages/login/login';
import { TabsPage } from '../../pages/tabs/tabs';

@Component({
  selector: 'cpo-list',
  templateUrl: 'cpo-list.html'
})
export class CpoListComponent implements OnInit{

  @Input() listType: string = "";
  games: Observable<any[]>;
  nbJeux: Observable<number>;
  gameCount: number = 0;
  title: string = "";

  constructor(public navCtrl: NavController,
    public dataService: DataProvider, 
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authService: AuthProvider) {
  }

  /**
   * Initialization
   */
  ngOnInit(){
    switch(this.listType){
      case Config.LIST_WISH :
        this.title = "Liste de souhaits";
        break;
      case Config.LIST_LUDO :
        this.title = "Ma ludothèque";
        break;
      case Config.LIST_A_VOIR :
        this.title = "A voir";
        break;
      case Config.LIST_VENDUS :
        this.title = "Vendus";
        break;
      default:
        break;
    }
    this.onRefresh();
  }

  /**
   * Add new game
   */
  onAddGame(){
    this.navCtrl.push(FormPage, {
      mode: Config.MODE_NEW,
      listTypeOnEdit: this.listType
    });
  }

  /**
   * Refresh dataset
   */
  onRefresh(){
    const loading = this.loadingCtrl.create({content: 'Loading please wait...'});
    try{
      
      loading.present();
      this.games = this.dataService.fetchData(this.listType);
      this.games.subscribe(res => {
        this.gameCount = res.length;
        loading.dismiss();
      },
      error => {
        loading.dismiss();
      });
    } catch(err){
      loading.dismiss();
    }
  }

  /**
   * Edit selected game
   * @param game 
   */
  onEdit(game){
    this.navCtrl.push(FormPage, {
      mode: Config.MODE_EDIT, 
      game: game
    });
  }

  /**
   * Delete selected game
   * @param game 
   */
  onDelete(game){
    let alert = this.alertCtrl.create({
      title: 'Delete game ?',
      message: 'Delete ' + game.title + ' ?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Delete',
          handler: () => {
            this.dataService.deleteItem(game.id)
          }
        }
      ]
    });
    alert.present();
  }

  /**
   * User logout
   */
  onDisconnect(){
    this.authService.logoutUser().then(data => {
      //this.navCtrl.setRoot(LoginPage);
      this.navCtrl.popToRoot();
    });    
  }
}
