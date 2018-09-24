import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor() { }

  jobs = [
    {
      "title": "Desenvolvedor Front-end Angular",
      "company": "Linkedin",
      "city": "São Paulo, Brasil",
      "photo": "https://media.licdn.com/dms/image/C4D0BAQFlLFOliANaJg/company-logo_200_200/0?e=1545868800&v=beta&t=wP4KTnfijmDQ-pJKy0v3zn9-8nbnw4dboSU7JkrOPlg"
    },
    {
      "title": "Desenvolvedor Front-end Vue.js",
      "company": "Curriculo Grátis",
      "city": "São Paulo, Brasil",
      "photo": "assets/curriculo.png"
    }
  ]

  getJobs() {
    return of(this.jobs)
  }
}
