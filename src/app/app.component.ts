import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from './services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private translate: TranslateService,
    private storage: StorageService
  ) {
  }
  ngOnInit(): void {
    this.storage.getObject('xc-settings')
      .then(xCSettings => {
        if (xCSettings) {
          this.translate.use(xCSettings.language);
        } else {
          xCSettings = {
            language: 'fr',
            darkMode: false
          };
          this.storage.setObject('xc-settings', xCSettings);
          this.translate.setDefaultLang('fr');
        }
      });
  }
}
