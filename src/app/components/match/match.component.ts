import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Pin } from './../../models/pin-model';
import { HttpService } from './../../providers/http.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {

  user: FormGroup;
  array: Array<number> = new Array<number>();
  tabela: Array<number> = new Array<number>();
  saveValue;
  
  constructor(private formBuilder: FormBuilder, public service: HttpService) { }

  ngOnInit() {
    this.service.save = JSON.parse(this.service.getSaveValue());
    this.user = this.formBuilder.group({
      point: [null]
    })
  }

  onSubmit() {
    this.array.push(this.user.value.point);
    this.service.soma(this.array);
    this.tabela.push(this.service.somatorio);
    this.saveValue = this.service.getSaveValue();
  }

}
