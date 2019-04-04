import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { JobsComponent } from '../../components/jobs/jobs.component';
import { PostComponent } from '../../components/post/post.component';

import { FeedRoutingModule } from './feed-routing.module';
import { ProfileUserModule } from '../../components/profile-user/profile-user.module'

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule,
    ProfileUserModule
  ],
  declarations: [
    FeedComponent,
    AsideComponent,
    JobsComponent,
    PostComponent
  ]
})
export class FeedModule { }
