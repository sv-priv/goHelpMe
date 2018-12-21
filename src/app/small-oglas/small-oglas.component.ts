import { Component, OnInit } from '@angular/core';
import {tekstIsliki} from './tekstIsliki';
import {medicinski} from './medicinski';
import {edukativni} from './edukativni';
import {itni} from './itni';
import {memorijalni} from './memorijalni';


@Component({
  selector: 'app-small-oglas',
  templateUrl: './small-oglas.component.html',
  styleUrls: ['./small-oglas.component.css']
})
 
export class SmallOglasComponent implements OnInit {

  
  choices=['Surovina','Paricni sredstva'];
  medicinski=medicinski;
  edukativni=edukativni;
  itni=itni;
  memorijalni=memorijalni;


heroes=[];

  myHero = this.heroes[0];
 
  
  constructor() {
  
  /*  medicinski:tekstIsliki[] = [{text:'Апел за помош на малиот Петар',img:"../../assets/img/petar.jpg"}, {text:'Да му помогнеме на Борче',img:""}, {text:'Апел за помош, заедно против канцерот',img:""}];
  //medicinskiSliki=["../../assets/img/petar.jpg","",""];
  edukativni:tekstIsliki[] = [{text:'Донација за младиот и ентузијастичен Марко',img:"../../assets/img/marko.jpg"}, {text:'Со ваша помош до едукација од соништата',img:""}, {text:'На чекор до остварувања без граници ',img:"../../assets/img/bezgranici.jpg"}];
 // eduktaivniSliki=["../../assets/img/marko.jpg","","../../assets/img/bezgranici.jpg"];
  itni:tekstIsliki[] = [{text:'Помош на поплавените во Скопје',img:"../../assets/img/flood.jpg"}, {text:'Да им помогнеме на погодените од земјотрес',img:"../../assets/img/zemjotres.jpg"}, {text:'Помош за оштетените во пожарот',img:"../../assets/img/fire.jpg"}];
  //itniSliki=["../../assets/img/flood.jpg","../../assets/img/zemjotres.jpg","../../assets/img/fire.jpg"];
  memorijalni:tekstIsliki[] = [{text:'Да се запамти делото на една мајка',img:"../../assets/img/mother.jpg"},{text:'Меморијален турнир во мал фудбал',img:"../../assets/img/macedoniasoccer.jpg"}, {text:'Меморијален Концерт',img:"../../assets/img/concert.jpg"}];
 // memorijalniSliki=["../../assets/img/mother.jpg","../../assets/img/macedoniasoccer.jpg","../../assets/img/concert.jpg"];
 */
   }

  ngOnInit() {
  }

}
