import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatorsListComponent } from './translators-list/translators-list.component';
import { TranslatorDetailsComponent } from './translator-details/translator-details.component';

import { TranslatorsRoutingModule } from './translators-routing.module';

import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [TranslatorsListComponent, TranslatorDetailsComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    TranslatorsRoutingModule
  ]
})
export class TranslatorsModule { }
