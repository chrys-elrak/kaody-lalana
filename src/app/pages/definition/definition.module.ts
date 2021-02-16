import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefinitionPageRoutingModule } from './definition-routing.module';

import { DefinitionPage } from './definition.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefinitionPageRoutingModule,
    TranslateModule
  ],
  declarations: [DefinitionPage]
})
export class DefinitionPageModule {}
