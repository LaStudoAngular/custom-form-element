import { NgModule } from '@angular/core';

import {CustomInputComponent} from './custom-input/custom-input.component';
import {CustomButtonComponent} from './custom-button/custom-button.component';
import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CustomInputComponent, CustomButtonComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [CustomInputComponent, CustomButtonComponent]
})
export class UiKitModule { }
