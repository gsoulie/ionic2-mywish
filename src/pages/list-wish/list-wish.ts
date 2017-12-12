import { CpoListComponent } from './../../components/cpo-list/cpo-list';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-list-wish',
  templateUrl: 'list-wish.html',
})
export class ListWishPage {
  @ViewChild(CpoListComponent) cpoList: CpoListComponent;

  constructor() {}
  ionViewDidLoad() {}
}
