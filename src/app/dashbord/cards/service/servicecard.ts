import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { apiUrl } from 'src/app/produit/service/api'; 
import { Cards } from '../models/card';

@Injectable({
  providedIn: 'root',
})
export class serviceCards {
  private sharedDataSubject: BehaviorSubject<Cards> = new BehaviorSubject<Cards>({gain:0,
    salle: 0,
  credit:0,
  annuler: 0}
);


 

  constructor(private http: HttpClient) {}

  setSharedData(data: Cards) {
    this.sharedDataSubject.next(data);
  }

  getSharedData(): Observable<Cards> {
    return this.sharedDataSubject.asObservable();
  }

 

}
