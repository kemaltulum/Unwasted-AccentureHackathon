import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { ProfileComponent } from './profile/profile.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { MenuEvaluationComponent } from './menu-evaluation/menu-evaluation.component';
import { HelpComponent } from './help/help.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'feedback/:id', component: FeedbackComponent },
  { path: '', component: ProfileComponent },
  { path: 'scoreboard', component: ScoreboardComponent },
  { path: 'menu-evaluation', component: MenuEvaluationComponent },
  { path: 'help', component: HelpComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]

})
export class AppRoutingModule {
}