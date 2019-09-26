import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user = {
    "id": "lucaslimax",
    "name": "Lucas Lima",
    "job": "Front-end at Open Source",
    "connections": 99,
    "location": "Pombal, Paraíba, Brasil",
    "photo": "./assets/lucas.jpeg",
    "about": `
Experiente programador e designer de interfaces com mais de 8 anos de experiência
Especialista no desenvolvimento de soluções e design para projetos web
Trazendo sempre inovações com qualidade e arte

Venho trabalhando e estudando os padrões e tecnologias web, como CSS, HTML, Javascript
Atuando com os framework's Angular e Vue.js
Usando Stylus e Sass como preprocessadores CSS e Pug.js como template engine HTML
Utilizo o Git como ferramenta de versionamento de código

Focando meu desenvolvimento na melhoria da informação com performance e qualidade
Fazendo pesquisas, testes de usabilidade e conceitos de inovação tecnológica
Melhorando e trazendo resultados positivos dentro dos projetos que ajudo e desenvolvo

Também desenvolvo arte urbana e um trabalho poético, com diversas intervenções artísticas levando uma mensagem de amor e arte por todos os lugares que eu tenho o prazer de passar`
  }
}
