import { Component, OnInit, HostListener } from '@angular/core';

import { UserService } from '../../services/user.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {

  constructor(private userService: UserService) { }

  menu = false
  menuBtn = true
  user = this.userService.user

  showMenu() {
    this.menu = !this.menu
  }

  hiddenMenuBtn() {
    if(window.innerWidth > 799) {
      this.menuBtn = false
    }
  }

  @HostListener('window:resize') onResize() {
    if(window.innerWidth > 799) {
      this.menuBtn = false
    }
    if(window.innerWidth < 800) {
      this.menuBtn = true
    }
  }

  ngOnInit() {
    this.hiddenMenuBtn()
  }

}
