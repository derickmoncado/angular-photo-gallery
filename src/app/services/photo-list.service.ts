import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPic } from '../models/Pic';

@Injectable({
  providedIn: 'root',
})
export class PhotoListService {
  constructor(public http: HttpClient) {}

  // API call
  public getPics(): Observable<IPic[]> {
    const loremPicsumURL = 'https://picsum.photos/v2/list?&limit=16';
    return this.http.get<IPic[]>(loremPicsumURL);
  }
}
