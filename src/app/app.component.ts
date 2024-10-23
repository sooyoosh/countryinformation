import { Component } from '@angular/core';
import { CallService } from './services/call.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-weather-app';





  // getdata(){
  //   this.call.GetData('germany').subscribe((res)=>{
  //     console.log(res)
  //   })
  // }

}
