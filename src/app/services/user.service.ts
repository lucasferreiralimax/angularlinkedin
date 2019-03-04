import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user = {
    "name": "Lucas Lima",
    "job": "Front-end at Open Source",
    "connections": 99,
    "photo": "./assets/lucas.jpeg"
  }
}
