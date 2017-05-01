import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class CardDataService {

  constructor(private http: Http) {

  }


  getClass(className): Observable<any> {
    return this.http.get(`resources/cards/${className}.json`).map((res: any) => res.json());
  }
}
