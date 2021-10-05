import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {WelcomeComponent} from "./components/welcome/welcome.component";
import {Overview31Component} from "./components/scooters/overview31/overview31.component";
import {Overview32Component} from "./components/scooters/overview32/overview32.component";
import {Overview33Component} from "./components/scooters/overview33/overview33.component";
import {UnknownRouteComponent} from "./components/unknown-route/unknown-route.component";


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home' , component: WelcomeComponent},
  { path: 'overview31' , component: Overview31Component},
  { path: 'overview32' , component: Overview32Component},
  { path: 'overview33' , component: Overview33Component},
  { path: 'not-found', component: UnknownRouteComponent},
  { path: '**',  redirectTo: '/not-found'}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
