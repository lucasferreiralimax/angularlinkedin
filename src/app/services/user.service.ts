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
Desenvolvedor Front-end e Designer
Especialista em criar soluções tecnológicas nos padrões Web

Desenvolvendo sempre soluções com as seguintes tecnologias: CSS, HTML, JavaScript
Webpack, Gulp.js, Grunt.js, ParcelJS, Cypress.io, jQuery, Quasar.js, Nuxt.js, Typescript, ES6
React.js e os Framework Angular e Vue.js

Utilizo o Git como versionador de código e o github, bitbucket, gitlab
O pré-processador Stylus para trabalhar o CSS, também trabalho com Less e Sass
Buscando sempre desenvolver e escrever um HTML semântico em sua última versão
Utilizando o máximo que a linguagem oferecer, também utilizo o Pug.js como template

Meu foco é a melhoria da informação com performance trazendo qualidade e inovação
Criando testes End-to-End usando Cypress.io, gerando resultados positivos nos projetos
Fazendo pesquisas e testes de usabilidade, melhorando a experiência com animações em CSS

Mantenho um Web App Open Source que gera um simples currículo online ou offline
Usando as seguintes tecnologias: Vue.js, Stylus, Pug.js
Firebase para hospedar nos servidores do Google
Também uso Heroku CLI para hospedar nos servidores Heroku
Seguindo os padrões PWA (Progressive Web App) e W3C (World Wide Web Consortium)

Link do projeto: curriculo-gratis.web.app

Desenvolvo minhas habilidades artísticas dentro e fora da tecnologia
Escrevendo poesia e também fazendo artes visuais (arte urbana)

Criando intervenções por onde passo nas periferias e vias urbanas
Levando uma mensagem de amor com bastante arte pra quem ama
Buscando novas perspectivas para um mundo melhor toda semana`
  }
}
