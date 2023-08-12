import { Component,OnInit } from '@angular/core';
import { ServiceDashbord } from './service/dashbord'; 
import { Dashbord } from './models/dashbord';
import { Cards } from './cards/models/card';
import { serviceCards } from './cards/service/servicecard';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent  implements OnInit {

  dashbors!:Dashbord[];
   cards!:Cards
  constructor(private service:ServiceDashbord,private serviceo:serviceCards){
  }

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
    this.serviceo.setSharedData(this.cards)
    
    
  }
  ngOnInit(){
    this.service.getDashbord().subscribe(e=>{this.dashbors=e
     this. calculer_rbah();
     this.calcule_Salle()
     this.callculler()
    }
      ,err=>console.log(err))

  }

  
 



}
