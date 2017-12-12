import { DataProvider } from './../../providers/data/data';
import { ToolProvider } from './../../providers/tool/tool';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Game } from './../../models/game';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Config } from '../../providers/config/config';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'page-form',
  templateUrl: 'form.html',
})
export class FormPage implements OnInit{

  //appName = 'Ionic App';
  nbJoueur = Config.PLAYER;
  typeListe = Config.LIST_TYPE; 
  title: string = "Nouveau jeu";
  category: any[] = [];
  selectedCategory: any[] = [];
  gameForm: FormGroup;
  mode = Config.MODE_EDIT;
  game: Game;
  index: number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public tool: ToolProvider,
    private dataService: DataProvider) {

    for(let i in Config.category){
      this.category.push({guid: Config.category[i].guid, libelle: Config.category[i].libelle, color: Config.category[i].color, enable: false});
    }
  }

  ionViewDidLoad() {}

  /**
   * Retrieve parameters
   */
  ngOnInit(){
    this.mode = this.navParams.get('mode');
    if (this.mode == Config.MODE_EDIT) {
      this.game = this.navParams.get("game");
      this.index = this.navParams.get("index");
      this.title = this.game.title;
    }
    this.initializeForm();
  }

  /**
   * FormGroup initialilzation
   */
  private initializeForm(){
    let title = null;
    let comment = null;
    let price = null;
    let duration = null;
    let editor = null;
    let player = Config.DEFAULT_PLAYER;//2 à 4
    let listType = Config.DEFAULT_LIST;
    this.selectedCategory = [];

    if (this.mode == Config.MODE_EDIT) {
      title = this.game.title;
      comment = this.game.comment;
      price = this.game.price;
      duration = this.game.duration;
      editor = this.game.editor;
      player = this.game.player;
      listType = this.game.listType;

      for(var i in this.game.category){
        console.log("categorie " + this.game.category[i].libelle + " - " + this.game.category[i].guid);
        let index = this.tool.arraySearch(this.game.category[i].guid,this.category,"guid");
        console.log("index ? " + index);
        if(index >= 0){
          this.category[index].enable = true;
        }
      }
    } else {
      // Selected listType in Creation mode
      listType = this.navParams.get('listTypeOnEdit') || "";
    }

    this.gameForm = new FormGroup({
      'title': new FormControl(title, Validators.required),
      'comment': new FormControl(comment, Validators.required),
      'price': new FormControl(price, Validators.required),
      'duration': new FormControl(duration, Validators.required),
      'editor': new FormControl(editor, Validators.required),
      'player': new FormControl(player, Validators.required),
      'listType': new FormControl(listType, Validators.required)
    });
  }

  /**
   * Category state when selected
   * @param e 
   */
  onSelect(e){
    this.category[e].enable = !this.category[e].enable;
  }

  /**
   * Save the game
   */
  onSave(){
    const value = this.gameForm.value;
    // Get selected categories
    for(let i in this.category){
      if(this.category[i].enable == true){this.selectedCategory.push(this.category[i]);}
    }

    // UPDATE MODE

    if (this.mode == Config.MODE_EDIT) {
      this.dataService.updateGame(this.game.id,
                            value.title,
                            value.comment,
                            value.player,
                            value.duration,
                            value.price,
                            value.editor,
                            value.listType,
                            this.selectedCategory);
      
    } else {
      // CREATION MODE

        this.dataService.addGame(value.title,
                        value.comment,
                        value.player,
                        value.duration,
                        value.price,
                        value.editor,
                        value.listType,
                        this.selectedCategory);
    }
    
    this.gameForm.reset();
    this.navCtrl.popToRoot();
  }
}
