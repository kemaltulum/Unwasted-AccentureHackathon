import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'user', component: UserComponent},
  { path: 'feedback', component: FeedbackComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]

})
export class AppRoutingModule{

}