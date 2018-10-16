import { Component, OnInit } from '@angular/core';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.styl']
})
export class AsideComponent implements OnInit {

  constructor(private userService: UserService) { }

  user = this.userService.user

  ngOnInit() {
  }

}
