import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableauproduitComponent } from './produit/component/tableauproduit/tableauproduit.component';
import { AddOrModProduitComponent } from './produit/component/add-or-mod-produit/add-or-mod-produit.component';
import { ProduitComponent } from './produit/produit.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardsComponent } from './dashbord/cards/cards.component';
import { CommandesComponent } from './dashbord/commandes/commandes.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TableauproduitComponent,
    AddOrModProduitComponent,
    ProduitComponent,
    DashbordComponent,
    LoginComponent,
    NavbarComponent,
    CardsComponent,
    CommandesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,HttpClientModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
