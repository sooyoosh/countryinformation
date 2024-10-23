import { Component, inject } from '@angular/core';
import { CallService } from '../../services/call.service';
import { Router } from '@angular/router';
//





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  man:any='salam'
  visible: boolean = false;
  alldata:any
//all information
flags:any
borders:any
fifa:any
name:any
region:any
// currencies:any
//all information



  

  constructor( private call: CallService, private router:Router){}

  FindCountry(Country){
    
    this.visible=true
    
    
    this.call.GetData(Country).subscribe((data)=>{
      debugger
      this.alldata=data[0]
      this.initValue()
       
      //  this.currencies=this.alldata.currencies.valueof()
      //  console.log(this.currencies)
    })

  }

  initValue(){
    this.flags=this.alldata.flags 
    this.borders=this.alldata.borders.slice(0,2)
    this.fifa=this.alldata.fifa
    this.name=this.alldata.name.common
    this.region=this.alldata.region
    console.log(this.fifa)
  }  




}

