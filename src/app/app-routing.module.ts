import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {HobbyComponent} from "./hobby/hobby.component";
import {SurfComponent} from "./hobby/surf/surf.component";
import {SoccerComponent} from "./hobby/soccer/soccer.component";


const routes: Routes = [
  {
    path: '',
    component: MainComponent
  },
  {
    path: 'main',
    component: MainComponent
  },
  {
    path: 'hobby/:id',
    component: HobbyComponent,
    children: [
      {path: '', redirectTo: 'hobby', pathMatch: 'full'},
      {path: 'surf', component: SurfComponent},
      {path: 'soccer', component: SoccerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
