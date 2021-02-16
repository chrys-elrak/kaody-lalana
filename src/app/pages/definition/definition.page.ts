import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.page.html',
  styleUrls: ['./definition.page.scss'],
})
export class DefinitionPage implements OnInit {

  constructor(translate: TranslateService) {
    translate.setDefaultLang('mg');
}
  ngOnInit() {
  }

}
