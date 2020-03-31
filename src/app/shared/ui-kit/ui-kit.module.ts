import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { CustomInputComponent } from './custom-input/custom-input.component';
import { CustomButtonComponent } from './custom-button/custom-button.component';

@NgModule({
  declarations: [CustomInputComponent, CustomButtonComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [CustomInputComponent, CustomButtonComponent]
})
export class UiKitModule { }
