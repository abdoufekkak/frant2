import { Component ,Input} from '@angular/core';
import { Dashbord } from '../models/dashbord';
import { ServiceDashbord } from '../service/dashbord';
import { serviceCards } from '../cards/service/servicecard';
import { Cards } from '../cards/models/card';

@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent  {

  datedebut!:Date;
  datefin!:Date;
 @Input() dashbors!:Dashbord[];
 cards!:Cards;
 constructor(public service:ServiceDashbord,public serviceo:serviceCards){}
//  cards!:Cards

calculer_rbah(){

  var  s=0;
    var annules=0;
    for(let i=0;i<this.dashbors.length;i++){
      if(this.dashbors[i].annuler ==1 ){
        annules=annules+1
      }
 s=s+this.dashbors[i].rbah_resteau;
    }
    
    this.serviceo.getSharedData().subscribe(data=>{this.cards=data;
      this.cards.gain=s
      this.cards.annuler=annules
    })
    this.serviceo.setSharedData(this.cards)
    
}

calcule_Salle(){

  var  s=this.dashbors.length;
  
  
  this.serviceo.getSharedData().subscribe(data=>{this.cards=data;
    this.cards.salle=s
  })
  this.serviceo.setSharedData(this.cards)
  
}
callculler(){
  var  s=0;
  for(let i=0;i<this.dashbors.length;i++){
    if(this.dashbors[i].payee ==0 ){
      s=s+this.dashbors[i].rbah_resteau
    }
  }
  
  this.serviceo.getSharedData().subscribe(data=>{this.cards=data;
    this.cards.credit=s
})
}
envoyer(){
  if(this.datedebut&&this.datefin){
    this.service.getDashbord(this.datedebut,this.datefin).subscribe(date=>{
      this.dashbors=date;
    this.calcule_Salle();
    this.calculer_rbah();
    this.callculler();
    });
  }
}
}
