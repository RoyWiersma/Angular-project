import { LOCALE_ID,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import '@angular/common/locales/global/nl';
import {Overview31Component} from "./components/scooters/overview31/overview31.component";
import { Detail32Component } from './components/scooters/detail32/detail32.component';
import {Overview32Component} from "./components/scooters/overview32/overview32.component";
import {FormsModule} from "@angular/forms";
import { Overview33Component } from './components/scooters/overview33/overview33.component';
import { Detail33Component } from './components/scooters/detail33/detail33.component';
import {AppRoutingModule} from "./app-routing.module";
import { UnknownRouteComponent } from './components/unknown-route/unknown-route.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    NavBarComponent,
    Overview31Component,
    Overview32Component,
    Detail32Component,
    Overview33Component,
    Detail33Component,
    UnknownRouteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'nl'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
