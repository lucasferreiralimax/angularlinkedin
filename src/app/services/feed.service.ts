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
      "photo": "https://media.licdn.com/dms/image/C5603AQHv9IK9Ts0dFA/profile-displayphoto-shrink_800_800/0?e=1543449600&v=beta&t=1rOBA_CflNKl3nlcLUx_Eblu1kH0MSOfwk6F8399b-E"
    },
    {
      "name": "Lucas Lima",
      "content": "Linkedin eu não quero criar uma rede social ok? Não me censure!",
      "likes": 1,
      "photo": "https://media.licdn.com/dms/image/C4D03AQHhDJmVc7vBvw/profile-displayphoto-shrink_100_100/0?e=1543449600&v=beta&t=EU-mFAANMKtiSQzrktDe9drWlc0rFd_TRpaz5D3nnlA"
    },
    {
      "name": "Mark Zuckerberg",
      "content": "Valorize quem constrói, pois quem destrói não estuda e para atrasar tem muitos!",
      "likes": 999000666,
      "photo": "https://media.licdn.com/dms/image/C4E0BAQFgxNeOUH5CZA/company-logo_200_200/0?e=1545868800&v=beta&t=2roycseuANXoEMP5AHPfF0eOoNmadPCrHw5wWOvVv2g"
    }
  ]

  getFeed() {
    return of(this.feed)
  }
}
