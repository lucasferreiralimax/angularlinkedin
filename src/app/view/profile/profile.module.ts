import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileUserModule } from '../../components/profile-user/profile-user.module'

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileUserModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
