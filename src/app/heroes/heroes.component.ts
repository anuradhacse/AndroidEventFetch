import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROS} from '../mock-heros';
import {HeroService} from "../hero.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})

export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService){}

  ngOnInit() {
    // this.getHeroes();
    this.getPrefetchingList();
  }

  /*getHeroes(){
    this.heroes = this.heroService.getHeroes();
  }*/

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  getPrefetchingList(): void{
    this.heroService.getPrefetcherList().subscribe(
      data => {
        console.log(data);
      }
    );
  }

  onSelect(hero: Hero): void { this.selectedHero = hero; }
}
