import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetailsModalComponent } from 'src/app/components/details-modal/details-modal.component';

@Component({
  selector: 'app-definition',
  templateUrl: './definition.page.html',
  styleUrls: ['./definition.page.scss'],
})
export class DefinitionPage implements OnInit {
  text = `<b>Hello</b>`

  constructor(
    private modalController: ModalController
  ) {

  }

  ngOnInit() {
  }

  async presentModal(data: any) {
    const modal = await this.modalController.create({
      component: DetailsModalComponent,
      componentProps: data
    });
    return await modal.present();
  }

}
