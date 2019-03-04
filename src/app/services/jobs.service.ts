import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }

  private jobs = [
    {
      "title": "Desenvolvedor Front-end Angular",
      "company": "Linkedin",
      "city": "São Paulo, Brasil",
      "photo": "",
      "link": "https://lucaslima-x.firebaseapp.com"
    },
    {
      "title": "Desenvolvedor Front-end Vue.js",
      "company": "Curriculo Grátis",
      "city": "São Paulo, Brasil",
      "photo": "assets/curriculo.png",
      "link": "http://curriculo-gratis.firebaseapp.com"
    }
  ]

  getJobs() {
    return of(this.jobs)
  }
}
