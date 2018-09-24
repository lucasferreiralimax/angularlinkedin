import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeedComponent } from './feed.component';
import { AsideComponent } from '../../components/aside/aside.component';
import { JobsComponent } from '../../components/jobs/jobs.component';

import { FeedRoutingModule } from './feed-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FeedRoutingModule
  ],
  declarations: [
    FeedComponent,
    AsideComponent,
    JobsComponent
  ]
})
export class FeedModule { }
