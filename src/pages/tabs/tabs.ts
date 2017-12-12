import { ListNoPage } from './../list-no/list-no';
import { ListWaitPage } from './../list-wait/list-wait';
import { ListLudoPage } from './../list-ludo/list-ludo';
import { ListWishPage } from './../list-wish/list-wish';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ListWishPage;
  tab2Root = ListLudoPage;
  tab3Root = ListWaitPage;
  tab4Root = ListNoPage;
  constructor() {

  }
}
