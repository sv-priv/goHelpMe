import { Component, OnInit } from '@angular/core';
import { HeroHomeComponent } from '../hero-home/hero-home.component';

@Component({
  selector: 'app-small-oglas',
  templateUrl: './small-oglas.component.html',
  styleUrls: ['./small-oglas.component.css']
})
export class SmallOglasComponent implements OnInit {
  medicinski = ['Windstorm', 'Bombasto', 'Magneta'];
  edukativni = ['Windstorm', 'Bombasto', 'Magneta'];
  itni = ['Windstorm', 'Bombasto', 'Magneta'];
  heroes = ['Windstorm', 'Bombasto', 'Magneta'];
  choices=['Surovina','Paricni sredstva'];
  myHero = this.heroes[0];
  constructor() { }

  ngOnInit() {
  }

}
