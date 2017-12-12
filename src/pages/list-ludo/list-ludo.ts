import { CpoListComponent } from './../../components/cpo-list/cpo-list';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-list-ludo',
  templateUrl: 'list-ludo.html',
})
export class ListLudoPage {
  @ViewChild(CpoListComponent) cpoList: CpoListComponent;

  constructor() {}
  ionViewDidLoad() {}
}
