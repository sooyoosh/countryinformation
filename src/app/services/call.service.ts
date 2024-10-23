import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export const environment ={
  baseUrl:'https://restcountries.com/v3.1/translation'
}
@Injectable({
  providedIn: 'root'
})



export class CallService {
  
data:any



  constructor(private http: HttpClient) { }


GetData(country:string){
  return this.http.get(`${environment.baseUrl}/${country}`)
}




}
