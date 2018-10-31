import Data from '../models/data.models';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Response} from '@angular/http';
import { Injectable } from '@angular/core';


import { catchError, map } from 'rxjs/operators';

@Injectable()
export class DataService {

  api_url = 'http://localhost:3000';
  dataUrl = `${this.api_url}/api/data`;

  constructor(
    private http: HttpClient
  ) { }

  getData(): Observable<Data[]> {
    return this.http.get(this.dataUrl)
    .pipe(map(res  => {
      return res['data'].docs as Data[];
    }));
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
