import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiUrl } from './api';
@Injectable({
  providedIn: 'root',
})
export class serviceProduit {
  private sharedDataSubject: BehaviorSubject<Produit> =
    new BehaviorSubject<Produit>({
      id_prod: 0,
      nom: '',
      prix: 0,
      categorie: '',
      supp: 0,
      // id_restau: -1,
      nom_restau: '',
      url_image: '',
      dispo: 0,
    });

  private produits: Produit[] = [];

  constructor(private http: HttpClient) {}

  setSharedData(data: Produit) {
    this.sharedDataSubject.next(data);
  }

  getSharedData(): Observable<Produit> {
    return this.sharedDataSubject.asObservable();
  }

  getProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${apiUrl}/produit2`);
  }

  addProduit(produit: Produit): Observable<any> {
    return this.http.post<any>(`${apiUrl}/produit2`, produit);
  }

  deleteProduit(id?: number): Observable<any> {
    return this.http.delete<any>(`${apiUrl}/produit2/${id}`);
  }
  updateProduit(produit: Produit, id?: number) {
    return this.http.put<any>(`${apiUrl}/produit2/${id}`, produit);
  }
  disactiverProduit(disactive: any, id: number) {
    return this.http.post<any>(`${apiUrl}/produit2/disactiver/${id}`, {
      disactive,
    });
  }

  chercherProduit(nom: string): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${apiUrl}/produit2/cherche?nom=${nom}`);
  }
  chercherParEntreprise(id: number): Observable<Produit[]> {
    return this.http.get<Produit[]>(`${apiUrl}/produit2/parentre?id=${id}`);
  }
}