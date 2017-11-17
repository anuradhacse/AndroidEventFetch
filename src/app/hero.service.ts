import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROS} from './mock-heros';
import {Observable} from "rxjs/Observable";
import {of} from "rxjs/observable/of";
import {MessageService} from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';
  private restUrl = 'http://localhost/FYPDemo/sendToFront.php';

  constructor(private http: HttpClient, private messageService: MessageService) { }

  // getHeroes(): Hero[] { return HEROS; }

  /*getHeroes(): Observable<Hero[]>{
    return of(HEROS);
  }*/

 /* /!** GET heroes from the server *!/
  getHeroes (): Observable<Hero[]> {
    this.log('prefetched')
    return this.http.get<Hero[]>(this.heroesUrl);
  }*/

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('HeroService: ' + message);
  }

  getHeroes (): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
     ;
  }

  /*getPrefetcherList (): Observable<Event[]> {
    return this.http.get<Event>(this.restUrl);

  }*/

}
