import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  settingModel = {
    language: '',
    darkMode: false
  };
  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  save() {
    console.log(this.settingModel);
    this.translate.setDefaultLang(this.settingModel.language);
  }

}
