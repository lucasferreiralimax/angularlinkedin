import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/feed'
  },
  {
    path: 'feed',
    loadChildren: './view/feed/feed.module#FeedModule'
  },
  {
    path: '**',
    loadChildren: './view/notfound/notfound.module#NotfoundModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
