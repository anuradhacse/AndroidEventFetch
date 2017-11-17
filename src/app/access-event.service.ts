import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import {AccessEvent} from "./access-event";



@Injectable()
export class AccessEventService {

  restUrl = 'http://localhost/FYPDemo/sendToFront.php';

  constructor(private http: HttpClient) { }

  getPrefetcherList (): Observable<AccessEvent[]> {

    return this.http.get<AccessEvent[]>(this.restUrl);

  }
}
