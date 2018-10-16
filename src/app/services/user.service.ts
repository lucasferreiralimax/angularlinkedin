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
    "photo": "https://media.licdn.com/dms/image/C4D03AQEjKZ0BTcUe-A/profile-displayphoto-shrink_200_200/0?e=1545264000&v=beta&t=umXKWez5jxfuTWnNMPjTvPd4-9SUYy8fBcx3YVUzWIw"
  }
}
