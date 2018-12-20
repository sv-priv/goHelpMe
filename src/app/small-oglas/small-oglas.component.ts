import { Component, OnInit } from '@angular/core';
import { HeroHomeComponent } from '../hero-home/hero-home.component';

@Component({
  selector: 'app-small-oglas',
  templateUrl: './small-oglas.component.html',
  styleUrls: ['./small-oglas.component.css']
})
export class SmallOglasComponent implements OnInit {
  medicinski = ['Апел за помош на малиот Петар', 'Да му помогнеме на Борче', 'Апел за помош, заедно против канцерот'];
  edukativni = ['Донација за младиот и ентузијастичен Марко', 'Со ваша помош до едукација од соништата', 'На чекор до остварувања без граници '];
  itni = ['Помош на поплавените во Скопје', 'Да им помогнеме на погодените од земјотрес', 'Помош за оштетените во пожарот'];
  memorijalni = ['Да се запамти делото на една мајка', 'Меморијален турнир во мал фудбал', 'Меморијален Концерт'];
  choices=['Surovina','Paricni sredstva'];
  heroes=['Windstorm', 'Bombasto', 'Magneta'];

  myHero = this.heroes[0];
  constructor() { }

  ngOnInit() {
  }

}
