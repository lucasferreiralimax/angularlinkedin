import { Component, OnInit } from '@angular/core';

import { FeedService } from '../../services/feed.service'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.styl']
})
export class FeedComponent implements OnInit {

  constructor(private feedService:FeedService) { }

  feed = []

  getFeed(): void {
    this.feedService.getFeed()
        .subscribe(feed => this.feed = feed)
  }

  ngOnInit() {
    this.getFeed()
  }

}
