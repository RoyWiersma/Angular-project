import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {Overview31Component} from "./components/scooters/overview31/overview31.component";
import {Overview32Component} from "./components/scooters/overview32/overview32.component";
import {Overview33Component} from "./components/scooters/overview33/overview33.component";
import {UnknownRouteComponent} from "./components/unknown-route/unknown-route.component";
import {Overview34Component} from "./components/scooters/overview34/overview34.component";
import {ScooterStartComponent} from "./components/scooters/scooter-start/scooter-start.component";
import {Detail34Component} from "./components/scooters/detail34/detail34.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home' , component: WelcomeComponent},
  { path: 'overview31' , component: Overview31Component},
  { path: 'overview32' , component: Overview32Component},
  { path: 'overview33' , component: Overview33Component},
  { path: 'overview34' , component: Overview34Component, children: [
      {path: '', component: ScooterStartComponent},
      {path: ':id' , component: Detail34Component}
    ]},
  { path: 'not-found', component: UnknownRouteComponent},
  { path: '**',  redirectTo: '/not-found'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
