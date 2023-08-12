import { Component, OnInit } from '@angular/core';
import { serviceProduit } from './service/serviceProduit';
import { Produit } from './model/produit';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.scss'],
})
export class ProduitComponent {
  produits!: Produit[];
  produit!: Produit;

  constructor(private service: serviceProduit) {}

  getValueFromChild(data: { produit: Produit; isBoolean: boolean }) {
    // const x: Admin = new Admin();
    //     x.id_admin=value.id_admin
    // x.nom_admin = value.nom_admin;
    // x.prenom_admin = value.prenom_admin;
    // x.email_admin = value.email_admin
    // x.numero_admin = value.numero_admin;
    // x.url_img =value.role_admin;
    // x.role_admin = value.role_admin;
    // x.dispo_admin =value.dispo_admin ;
    // x.mdp =  value.mdp;
    if (data.isBoolean) {
      let produitss = [...this.produits];
      produitss.push(data.produit);
      this.produits = produitss;
    }
    // }
    else {
      let prds = [...this.produits];

      const adminTrouve = prds.find(
        (produit) => produit.id_prod === data.produit.id_prod
      );
      console.log(data.produit.id_prod, 'Wer');
      if (adminTrouve) {
        adminTrouve.nom = data.produit.nom;
        adminTrouve.prix = data.produit.prix;
        adminTrouve.categorie = data.produit.categorie;
        adminTrouve.supp = data.produit.supp;
        // adminTrouve.id_restau = data.produit.id_restau;
        adminTrouve.nom_restau = data.produit.nom_restau;
        adminTrouve.url_image = data.produit.url_image;
        adminTrouve.dispo = data.produit.dispo;
        this.produits = prds;
      }
    }
  }

  ngOnInit(): void {
    this.service.getProduit().subscribe(
      (data) => (this.produits = data),
      (err) => console.log(err)
    );
  }

  getValueFromtable(value: Produit) {
    this.produit = value;
  }
  // getValueFromChild_mod(valeur:Admin){
  //   alert("xcv")
  // }
}