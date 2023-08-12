import { Component } from '@angular/core';
import { Cards } from './models/card';

import { Subscription } from 'rxjs';
import { serviceCards } from './service/servicecard';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  sharedData!: Cards;
  private subscription!: Subscription;


  constructor(private service:serviceCards) {
    this.subscription = this.service.getSharedData().pipe(
     
    ).subscribe((data) => {
      this.sharedData = data;
    });
  }
}
