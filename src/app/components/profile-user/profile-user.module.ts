import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileUserComponent } from './profile-user.component'

@NgModule({
  declarations: [ ProfileUserComponent ],
  exports: [ ProfileUserComponent ],
  imports: [
    CommonModule
  ]
})
export class ProfileUserModule { }
