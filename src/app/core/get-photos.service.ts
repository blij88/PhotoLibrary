import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Photo } from './Photo.model';
import { Observable, BehaviorSubject, pipe } from 'rxjs';
import{filter, find, first, map, mapTo, takeWhile} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GetPhotosService {

  private idSource = new BehaviorSubject(0);
  chosenId = this.idSource.asObservable();

  private boolSource = new BehaviorSubject(false)
changeBool = this.boolSource.asObservable()

  constructor(private httpClient: HttpClient) {
  }

  GetPhotos(): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
  }

  GetPhotoById(id: number): Observable<Photo> {
    return this.GetPhotos().pipe(map(x=> x.find(p => p.id === id)!))
  }

  GetId(id:number, bool: boolean){  
    console.log("at services")  
    this.idSource.next(id)
    this.boolSource.next(bool)
  }

}
