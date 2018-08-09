import { Match } from './../models/match-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  match: Match = new Match();

  constructor() { }

  soma(num:number){
    this.match.points = num;
  }
}
