import { CpoListComponent } from './../../components/cpo-list/cpo-list';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-list-no',
  templateUrl: 'list-no.html',
})
export class ListNoPage {
  @ViewChild(CpoListComponent) cpoList: CpoListComponent;

  constructor() {}
  ionViewDidLoad() {}
}


