import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CardDataService {

  constructor(private http: Http) {

  }


  getClass(className): Observable<any> {
    return this.http.get(`./resources/cards/${className}.json`).map((res: any) => res.json());
  }

  getDragon() {
    return this.http.get('./resources/cards/Dragon.json').map((res: any) => res.json());
  }

  getForest() {
    return this.http.get('./resources/cards/Forest.json').map((res: any) => res.json());
  }

  getHaven() {
    return this.http.get('./resources/cards/Haven.json').map((res: any) => res.json());
  }

  getRune() {
    return this.http.get('./resources/cards/Rune.json').map((res: any) => res.json());
  }

  getShadow() {
    return this.http.get('./resources/cards/Shadow.json').map((res: any) => res.json());
  }

  getSword() {
    return this.http.get('./resources/cards/Sword.json').map((res: any) => res.json());
  }
}
