import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService {

  restUrl = 'http://localhost/FYPDemo/sendToFront.php';

  constructor(private http: HttpClient) { }

  prefetchUsers(): Observable<User[]>{
     return this.http.get<User[]>(this.restUrl);
  }

}
