import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { ToolProvider } from '../tool/tool';

@Injectable()
export class DataProvider {
  gamesList: AngularFireList<any>;
  games: Observable<any[]>;
  
  constructor(public afDB: AngularFireDatabase, private tool: ToolProvider) {
  }

  fetchData(listType){
    /*this.gamesList = this.afDB.list('/games');
    this.games = this.gamesList.valueChanges();
    return this.games;*/

    /**
     * WARNING !!!
     * 
     * To improve querying performance, add indexOn rules in your firebase rules like :
     * 
     * {
        "rules": {
          ".read": "auth != null",
          ".write": "auth != null",
          "games": {
            ".indexOn": "listType"
          }
        }
      }
     */

    // Querying data on listType
    listType = listType || "WISH";
    this.gamesList = this.afDB.list('/games', ref => ref.orderByChild('listType').equalTo(listType));
    this.games = this.gamesList.valueChanges().map(items => items.sort(this.tool.predicateBy("title")));
    return this.games;  
  }


  addGame(title: string = "", 
          comment: string = "", 
          player: string = "",
          duration: number = 0, 
          price: number = 0, 
          editor: string = "", 
          listType: string = "",
          category: any[] = []){
    const newRef = this.gamesList.push({});
    
    newRef.set({
      id: newRef.key,
      title: title.toUpperCase(),
      comment: comment,
      player: player,
      duration: duration,
      price: price,
      editor: editor,
      listType: listType,
      category: category
    });        
  }

  updateGame(id, title: string = "", 
            comment: string = "", 
            player: string = "",
            duration: number = 0, 
            price: number = 0, 
            editor: string = "", 
            listType: string = "",
            category: any[] = []){

    if(id){
      this.gamesList.update(id, {
        title: title.toUpperCase(),
        comment: comment,
        player: player,
        duration: duration,
        price: price,
        editor: editor,
        listType: listType,
        category: category
      });
    } else {
      alert("Id missing !");
    }
  }

  deleteItem(id){
    if(id){
      this.gamesList.remove(id);
    }
  }
}