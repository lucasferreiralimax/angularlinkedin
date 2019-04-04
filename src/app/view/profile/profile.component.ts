import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.styl']
})
export class ProfileComponent implements OnInit {

  constructor(
    private activeRoute: ActivatedRoute,
    private router:Router,
    private title:Title
  ) { }

  profile = ''

  ngOnInit() {
    if(this.activeRoute.snapshot.params.profile) {
      this.profile = this.activeRoute.snapshot.params.profile
    } else {
      this.router.navigate(['/not-found'])
    }
  }

}
