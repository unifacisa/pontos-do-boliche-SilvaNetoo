import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENTS_ROUTES } from './components.routes';
import { MatchComponent } from './match/match.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MatchComponent
  ]
})
export class ComponentsModule { }
