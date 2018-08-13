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

  constructor(private formBuilder: FormBuilder, public service: HttpService) { }

  ngOnInit() {
    this.user = this.formBuilder.group({
      point: [null]
    })
  }

  onSubmit() {
    this.service.soma(this.user.value.point);
  }

}
