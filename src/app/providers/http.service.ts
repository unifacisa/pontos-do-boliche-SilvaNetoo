import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  somatorio: number = 0;

  constructor() { }
  
  soma(num:Array<number>){

    let valorTotal: number = 0;

    for (let i = 0; i < num.length; i++) {
      
      if(num[i] == 10 && i%2==0){
        console.log('strike');
        valorTotal += num[i + 2] + num[i + 3];
      }

      if(num[i] + num[i+1] == 10){
        console.log('spare');
        valorTotal += num[i+2];
      }

      valorTotal += num[i];
    }

    this.calcT(valorTotal);
  }
  
  calcT(num: number):number{
    this.somatorio = num;
    return this.somatorio;
  }

}
