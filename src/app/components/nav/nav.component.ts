import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {

  constructor() { }

  menu = false

  showMenu() {
    this.menu = !this.menu
  }

  ngOnInit() {
  }

}
