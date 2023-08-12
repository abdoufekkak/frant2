import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable ,BehaviorSubject} from 'rxjs';
import { apiUrl } from 'src/app/produit/service/api';
import { Dashbord } from '../models/dashbord';

@Injectable({
  providedIn: 'root',
})
export class ServiceDashbord {


  constructor(private http: HttpClient) {}




  getDashbord(datedebut?:Date,datefin?:Date) : Observable<Dashbord[]>{
    if(datedebut &&datefin) {
        return this.http.get<Dashbord[]>(`${apiUrl}/commande/parresteau?datedebut=${datedebut}&datefin=${datefin}`);
    }
    else{
        return this.http.get<Dashbord[]>(`${apiUrl}/commande/parresteau`);

    }
  }


}
