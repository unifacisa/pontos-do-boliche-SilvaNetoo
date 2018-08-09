import { element } from 'protractor';
import { HttpService } from './../../providers/http.service';
import { Match } from './../../models/match-model';
import { Pin } from './../../models/pin-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  match: Match = new Match();

  constructor(public service: HttpService) { }

  ngOnInit() {
    this.match.fallenPins = new Array<Pin>();
    this.add();
  }

  add() {
    this.match.fallenPins.push(new Pin());
  }

  remove(i: number) {
    this.match[i] = null;
    this.match.fallenPins.splice(i, 1);
  }

  onSubmit() {
    let counting:number = 0;
    this.match.fallenPins.forEach(element => {
      counting += element.firstPointPlayed + element.secondPointPlayed;
    });
    this.service.soma(counting);
    this.match.fallenPins = new Array<Pin>();
    this.ngOnInit()
  }

}
