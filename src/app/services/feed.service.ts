import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor() { }

  feed = [
    {
      "name": "Bill Gates",
      "content": "Os brasileiros são os melhores de todos os tempos",
      "likes": 67123456,
      "like": false
      "photo": "https://media.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_800_800/0?e=1543449600&v=beta&t=1rOBA_CflNKl3nlcLUx_Eblu1kH0MSOfwk6F8399b-E"
    },
    {
      "name": "Lucas Lima",
      "content": "Linkedin eu não quero criar uma rede social ok? Não me censure!",
      "likes": 1,
      "like": false
      "photo": "https://media.licdn.com/dms/image/C4D03AQHhDJmVc7vBvw/profile-displayphoto-shrink_100_100/0?e=1543449600&v=beta&t=EU-mFAANMKtiSQzrktDe9drWlc0rFd_TRpaz5D3nnlA"
    },
    {
      "name": "Mark Zuckerberg",
      "content": "Valorize quem constrói, pois quem destrói não estuda e para atrasar tem muitos!",
      "likes": 999000666,
      "like": false
      "photo": "https://media.licdn.com/dms/image/C4E0BAQFgxNeOUH5CZA/company-logo_200_200/0?e=1545868800&v=beta&t=2roycseuANXoEMP5AHPfF0eOoNmadPCrHw5wWOvVv2g"
    },
    {
      "name": "Bill Gates",
      "content": "Como eu amo os brasileiros, sem eles acho que não teriamos nada de evolução!",
      "likes": 451231,
      "like": false
      "photo": "https://media.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_800_800/0?e=1543449600&v=beta&t=1rOBA_CflNKl3nlcLUx_Eblu1kH0MSOfwk6F8399b-E"
    },
    {
      "name": "Reid Hoffman",
      "content": "O Linkedin precisa entender melhor, ajudar e não censurar os desenvolvedores que estão construindo um futuro melhor.",
      "likes": 6,
      "like": false
      "photo": "https://media.licdn.com/dms/image/C5603AQGBG-pWCdQcIA/profile-displayphoto-shrink_800_800/0?e=1543449600&v=beta&t=vV4r2CKvtMHixxtT3WyQ7BTq_ZodP6aIvbOwXuM68FM"
    },
    {
      "name": "Mark Zuckerberg",
      "content": "Tenho que admitir, os brasileiros são brilhantes!",
      "likes": 999666,
      "like": false
      "photo": "https://media.licdn.com/dms/image/C4E0BAQFgxNeOUH5CZA/company-logo_200_200/0?e=1545868800&v=beta&t=2roycseuANXoEMP5AHPfF0eOoNmadPCrHw5wWOvVv2g"
    }
  ]

  addFeed(text: string) {
    this.feed.unshift({
      "name": "Linus Torvalds",
      "content": text,
      "likes": 0,
      "photo": "assets/linus.jpg"
    })
  }

  addLike(id: number) {
    if(!this.feed[id].like) {
      this.feed[id].likes++
      this.feed[id].like = true
    }
  }

  getFeed() {
    return of(this.feed)
  }
}
