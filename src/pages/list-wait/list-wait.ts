import { CpoListComponent } from './../../components/cpo-list/cpo-list';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'page-list-wait',
  templateUrl: 'list-wait.html',
})
export class ListWaitPage {
  @ViewChild(CpoListComponent) cpoList: CpoListComponent;

  constructor() {}
  ionViewDidLoad() {}
}

