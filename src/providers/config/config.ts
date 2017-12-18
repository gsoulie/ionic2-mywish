import { Injectable } from '@angular/core';

@Injectable()
export class Config{
 
  public static TAB_WISH = 1;
  public static TAB_LUDO = 2;
  public static MODE_NEW = "New";
  public static MODE_EDIT = "Edit";
  public static PLAYER = ['1 à 4', '1 à 5', '1 à 6+', '2', '2 à 4', '2 à 5', '2 à 6+', '3 à 4', '3 à 4+', '4+'];
  public static DEFAULT_PLAYER = '2 à 4';
  public static LIST_WISH = "WISH";
  public static LIST_LUDO = "MA LUDOTHEQUE";
  public static LIST_A_VOIR = "A VOIR";
  public static LIST_VENDUS = "VENDUS";
  public static LIST_TYPE = ['WISH', 'MA LUDOTHEQUE', 'A VOIR', 'VENDUS'];
  public static DEFAULT_LIST = 'WISH';
  public static category = [{guid: 1, libelle:"Gestion", color:"#3F54B1"},
  {guid: 2, libelle:"Ressources", color:"#D0340C"},
  {guid: 3, libelle:"Pose ouvrier", color:"#1688E1"},
  {guid: 4, libelle:"Tuiles", color:"#F56F00"},
  {guid: 5, libelle:"Placement", color:"#A126B4"},
  {guid: 6, libelle:"Cubes", color:"#FF99CC"},
  {guid: 7, libelle:"Réflexion", color:"#1abc9c"},
  {guid: 8, libelle:"Conquête", color:"#A7DA64"},
  {guid: 9, libelle:"Exploration", color:"#D14367"},
  {guid: 10, libelle:"Construction", color:"#379A3F"},
  {guid: 11, libelle:"Développement", color:"#FBC800"},
  {guid: 12, libelle:"Majorité", color:"#F8ED53"},
  {guid: 13, libelle:"Stratégie", color:"#00BCD4"},
  {guid: 14, libelle:"Expert", color:"#000000"},
  {guid: 15, libelle:"Dés", color:"#34495e"},
  {guid: 16, libelle:"Plateau", color:"#33FF99"},
  {guid: 17, libelle:"Ambiance", color:"#2c3e50"},
  {guid: 18, libelle:"Familial", color:"#C2185B"},
  {guid: 19, libelle:"Affrontement", color:"#00FFFF"},
  {guid: 20, libelle:"Cartes", color:"#FF99CC"},
  {guid: 21, libelle:"Draft", color:"#A8E8D8"},
  {guid: 22, libelle:"Extension", color:"#FFE57F"},
  {guid: 23, libelle:"Coop", color:"#999999"},
  {guid: 24, libelle:"Bluff", color:"#737373"},
  {guid: 25, libelle:"Rapidité", color:"#8BB553"},
  {guid: 26, libelle:"Civilisation", color:"#F50057"},
  {guid: 27, libelle:"JCC", color:"#CDDC39"},
  {guid: 28, libelle:"JCE", color:"#795548"},
  {guid: 29, libelle:"JDR", color:"#FF99CC"},
  {guid: 30, libelle:"Dungeon crawling", color:"#bbccaa"},
  {guid: 31, libelle:"Figurines", color:"#B3B3B3"},
  {guid: 32, libelle:"Wargame", color:"#3498db"},
  {guid: 33, libelle: "Optimisation", color:"#FF7070"}];
  
  constructor() {
  }

}
