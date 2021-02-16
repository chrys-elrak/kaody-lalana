import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(translate: TranslateService) {
    let xCSettings: any = localStorage.getItem('xc-settings');
    if (xCSettings) {
      xCSettings = JSON.parse(xCSettings);
      translate.use(xCSettings.language);
    } else {
      xCSettings = {
        language: 'fr',
        darkMode: false
      };
      localStorage.setItem('xc-settings' , JSON.stringify(xCSettings));
      translate.setDefaultLang('fr');
    }
  }
}
