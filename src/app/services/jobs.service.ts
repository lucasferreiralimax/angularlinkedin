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
      "city": "Paraíba, Brasil",
      "photo": "",
      "link": "https://lucasferreiralimax-dev.web.app"
    },
    {
      "title": "Desenvolvedor Front-end Vue.js",
      "company": "Curriculo Grátis",
      "city": "Paraíba, Brasil",
      "photo": "assets/curriculo.png",
      "link": "http://criar-curriculo.web.app"
    }
  ]

  getJobs() {
    return of(this.jobs)
  }
}
