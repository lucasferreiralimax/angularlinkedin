import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { FeedService } from '../../services/feed.service'

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.styl']
})
export class PostComponent implements OnInit {
  @ViewChild('post', {static: true}) post: ElementRef;

  value = ''
  erroSize = false
  btnSubmit = false

  update(value: string) {
    this.value = value
    if(value.length <= 70 && value.length > 0) {
      this.erroSize = false
      this.btnSubmit = true
    } else if(value.length > 70) {
      this.erroSize = true
      this.btnSubmit = false
    } else {
      this.erroSize = false
      this.btnSubmit = false
    }
  }

  newPost(value) {
    if(value.trim()) {
      this.feedService.addFeed(value)
      this.post.nativeElement.value = ''
      this.btnSubmit = false
    }
  }

  constructor(private feedService:FeedService) { }

  ngOnInit() {
  }

}
