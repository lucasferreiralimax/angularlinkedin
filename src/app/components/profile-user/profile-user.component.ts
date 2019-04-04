import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.styl']
})
export class ProfileUserComponent implements OnInit {

  @Input() user;
  @Input() type;

  constructor() { }

  ngOnInit() {
  }

}
