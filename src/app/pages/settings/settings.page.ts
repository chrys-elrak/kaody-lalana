import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { StorageService } from 'src/app/services/storage.service';

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
  constructor(
    private translate: TranslateService,
    private storage: StorageService,
    public toastController: ToastController
    ) { }

  ngOnInit() {
    this.storage.getObject('xc-settings').then(xCSettings => this.settingModel = xCSettings);
  }

  async save() {
    this.storage.setObject('xc-settings' , this.settingModel);
    this.translate.use(this.settingModel.language);
    const toast = await this.toastController.create({
      duration: 2000
    });
    this.translate.get('settings_page.save_success_toast').subscribe(text => {
      toast.message = text;
    })
    toast.present();
  }

}
