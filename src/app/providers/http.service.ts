import { element } from 'protractor';
import { Match } from './../models/match-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  isStrike: boolean = false;
  isSpare: boolean = false;
  strike: Array<number> = new Array<number>();
  spare: Array<number> = new Array<number>();
  plays: Array<number> = new Array<number>();
  playCounter: number = 0;
  countStrinke: number = 3;
  countSpare: number = 2;
  totalOfPoints: number = 0;
  counting: number;
  getValueIndex = true;

  constructor() { }

  soma(num:number){
    this.plays.push(num);
    if(num == 10 && (this.playCounter%2 == 0) || this.isStrike && !this.isSpare){
      console.log('strike')
      this.isSpare = false;
      this.isStrike = true;
      this.strike.push(num);
      this.countStrinke--;
      if(this.countStrinke == 0){
        console.log('entrou')
        this.strike.forEach(element => {
          this.totalOfPoints+= element;
        });
        this.isStrike = false;
        this.countStrinke = 3;
        this.strike = new Array<number>();
      }
    } 
    if(this.playCounter%2==1 || this.isSpare && !this.isStrike){
      console.log(this.playCounter%2==1);
      console.log(this.isSpare && !this.isStrike);
      if (this.plays[this.playCounter].valueOf() + this.plays[this.playCounter - 1].valueOf() == 10 && (this.playCounter%2 == 1) || this.isSpare){
        if(this.getValueIndex){
          this.spare.push(this.plays[this.playCounter - 1].valueOf());
          this.getValueIndex = false;
        }

        console.log('spare')
        this.isSpare = true;
        this.isStrike = false;
        this.spare.push(num);
        this.countSpare--;
        if(this.countSpare == 0){
          this.spare.forEach(element => {
            this.totalOfPoints += element;
          });
          this.isSpare = false;
          this.getValueIndex = true;
          this.countSpare = 2;
          this.spare = new Array<number>();
        }
      } 
    } 
    this.playCounter++;

  }
  
}
