import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import { serviceProduit } from '../../service/serviceProduit';
import { Produit } from '../../model/produit';
import { tap } from 'rxjs';

@Component({
  selector: 'app-tableauproduit',
  templateUrl: './tableauproduit.component.html',
  styleUrls: ['./tableauproduit.component.scss'],
})
export class TableauproduitComponent implements OnInit {
  valeur: string = '';
  sosio: number = -1;

  isChecked: boolean = false;

  constructor(private service: serviceProduit) {}
  @Input() produits!: Produit[];

  @Output() valueEmitted = new EventEmitter<Produit>();

  ngOnInit(): void {}
  delete(id?: number) {
    this.service
      .deleteProduit(id)
      .pipe(
        tap(() => {
          const index = this.produits.findIndex((obj) => obj.id_prod === id);

          if (index !== -1) {
            this.produits.splice(index, 1);
          }
        })
      )
      .subscribe(
        (e) => console.log(e),
        (er) => alert(er)
      );
  }
  update(produit: Produit) {
    this.service.setSharedData(produit);
    // this.valueEmitted.emit(admin);
  }
  chercher() {
    this.service
      .chercherParEntreprise(this.sosio)
      .pipe(
        tap((valeur) => (this.produits = valeur)) // Utilisez 'tap' pour affecter la valeur à la propriété 'admins'
      )
      .subscribe(
        (e) => console.log(e),
        (err) => console.log(err)
      );
  }

  disponible(produit: Produit) {
    let x = 0;
    if (produit.dispo == 1) {
      x = 0;
    } else {
      x = 1;
    }
    this.service
      .disactiverProduit(x, produit.id_prod!)
      .pipe(tap(() => {}))
      .subscribe(
        (e) => (produit.dispo = x),
        (err) => console.log(err)
      );
  }

  onValeurChange() {
    this.service
      .chercherProduit(this.valeur)
      .pipe(
        tap((valeur) => (this.produits = valeur)) // Utilisez 'tap' pour affecter la valeur à la propriété 'admins'
      )
      .subscribe(
        (e) => console.log(e),
        (err) => console.log(err)
      );

    // Faites des traitements supplémentaires en fonction de la nouvelle valeur ici
  }
}