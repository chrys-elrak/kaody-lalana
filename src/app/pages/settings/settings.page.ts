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
    this.settingModel = JSON.parse(localStorage.getItem('xc-settings'));
  }

  save() {
    localStorage.setItem('xc-settings' , JSON.stringify(this.settingModel));
    this.translate.setDefaultLang(this.settingModel.language);
  }

}
