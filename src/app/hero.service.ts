import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-heros';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";

@Injectable()
export class HeroService {

  constructor() { }

  // getHeroes(): Hero[] { return HEROS; }

  getHeroes(): Observable<Hero[]>{
    return of(HEROS);
  }
}
