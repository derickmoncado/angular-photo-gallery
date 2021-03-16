import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry, tap } from 'rxjs/operators';
import { IPic } from '../models/Pic';

@Injectable({
  providedIn: 'root',
})
export class PhotoListService {
  constructor(public http: HttpClient) {}

  // fetch pics from API
  public getPics(): Observable<IPic[]> {
    const loremPicsumURL = 'https://picsum.photos/v2/list?&limit=16';
    return this.http.get<IPic[]>(loremPicsumURL);
  }
}
