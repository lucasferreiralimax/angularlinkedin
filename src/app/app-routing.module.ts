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
    loadChildren: () => import('./view/feed/feed.module').then(m => m.FeedModule)
  },
  {
    path: 'in',
    loadChildren: () => import('./view/profile/profile.module').then(m => m.ProfileModule)
  },
  {
    path: '**',
    loadChildren: () => import('./view/notfound/notfound.module').then(m => m.NotfoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
