import { Injectable } from '@angular/core';
import {Topic} from '../models/topic';


@Injectable({
  providedIn: 'root'
})
export class TopicService {

  arr = [
    new Topic('Deportes', 'Juegos deportivos como fútbol, basquetbol, natación y más.', `https://picsum.photos/900/500?random&t=${Math.random()}`), 
    new Topic('Cultura', 'Aprende acerca de diferentes culturas en el mundo.', `https://picsum.photos/900/500?random&t=${Math.random()}`), 
    new Topic('Salud', 'Tips, medidas y tratamientos sobre salud.', `https://picsum.photos/900/500?random&t=${Math.random()}`), 
    new Topic('Idiomas', 'Diferentes datos sobre el aprendizaje de idiomas. Desde ingles a nahuatl.', `https://picsum.photos/900/500?random&t=${Math.random()}`)
  ];

  noticiasArr = [
    new Topic('Internacional', 'Noticias de todo el mundo. Todas las noticias mas recientes y mas demandadas.', `https://picsum.photos/900/500?random&t=${Math.random()}`), 
    new Topic('Nacional', 'Noticias de México, que esta pasando el dia de hoy y mas.', `https://picsum.photos/900/500?random&t=${Math.random()}`), 
    new Topic('Clima', ' laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla', `https://picsum.photos/900/500?random&t=${Math.random()}`), 
    new Topic('Política', 'sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud', `https://picsum.photos/900/500?random&t=${Math.random()}`)
  ];

  getTopics(): Topic[]{
    return this.arr;
  }

  getTopicsNoticias(): Topic[]{
    return this.noticiasArr;
  }

  addTopic(topic: Topic){
    this.arr.push(topic);
  }

  deleteTopic(topic: Topic){
    let pos = this.arr.indexOf(topic);
    this.arr.splice(pos, 1);
  }

  constructor() { }
}
