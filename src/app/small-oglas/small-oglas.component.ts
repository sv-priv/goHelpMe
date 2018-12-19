import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-oglas',
  templateUrl: './small-oglas.component.html',
  styleUrls: ['./small-oglas.component.css']
})
export class SmallOglasComponent implements OnInit {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado','Velko','Boko','Baba mi','Stefan'];
  choices=['Surovina','Paricni sredstva'];
  myHero = this.heroes[0];
  constructor() { }

  ngOnInit() {
  }

}
