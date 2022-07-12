import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RECAPTCHA_V3_SITE_KEY, RecaptchaV3Module} from 'ng-recaptcha';
import { AppComponent } from './app.component';
import {AEMModule} from "./aem/aem.module";
import {RouterModule} from "@angular/router";
import {AppRoutingModule} from "./app-routing.module";

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { PracticaComponent } from './practica/practica.component';

@NgModule({
  declarations: [
    AppComponent,
    PracticaComponent
  ],
    imports: [
        BrowserModule,
        AEMModule,
        RecaptchaV3Module,
        AppRoutingModule,
      HttpClientModule,
      FormsModule
    ],
  providers: [{
    provide: RECAPTCHA_V3_SITE_KEY,
    useValue: '6Ld4QOEfAAAAAKwaMpL0-lBoBmfeT286LXvrpztX',
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
