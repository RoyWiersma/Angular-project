import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
