import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor() { }

  private feed = [
    {
      "name": "Bill Gates",
      "job": "Co-chair, Bill & Melinda Gates Foundation",
      "content": "Os brasileiros são os melhores de todos os tempos",
      "likes": 67123456,
      "like": false,
      "photo": "./assets/billgates.jpeg"
    },
    {
      "name": "Lucas Lima",
      "job": "Front-end",
      "content": "Linkedin eu não quero criar uma rede social ok?",
      "likes": 2,
      "like": false,
      "photo": "./assets/lucas.jpeg"
    },
    {
      "name": "Mark Zuckerberg",
      "job": "Back-end",
      "content": "Valorize quem constrói, pois quem destrói não estuda e para atrasar tem muitos!",
      "likes": 9,
      "like": false,
      "photo": "./assets/zuckerberg.jpg"
    },
    {
      "name": "Bill Gates",
      "job": "Front-end",
      "content": "Como eu amo os brasileiros, sem eles acho que não teriamos nada de evolução!",
      "likes": 451231,
      "like": false,
      "photo": "./assets/billgates.jpeg"
    },
    {
      "name": "Mark Zuckerberg",
      "job": "Back-end",
      "content": "Tenho que admitir, os brasileiros são brilhantes!",
      "likes": 6,
      "like": false,
      "photo": "./assets/zuckerberg.jpg"
    }
  ]

  addFeed(text: string) {
    this.feed.unshift({
      "name": "Linus Torvalds",
      "job": "Back-end",
      "content": text,
      "likes": 0,
      "like": false,
      "photo": "assets/linus.jpg"
    })
  }

  addLike(id: number) {
    if(!this.feed[id].like) {
      this.feed[id].likes++
      this.feed[id].like = true
    } else {
      this.feed[id].likes--
      this.feed[id].like = false
    }
  }

  getFeed() {
    return of(this.feed)
  }
}
