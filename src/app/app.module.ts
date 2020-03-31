import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UiKitModule } from './shared/ui-kit/ui-kit.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UiKitModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
