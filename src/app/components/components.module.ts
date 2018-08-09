import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { COMPONENTS_ROUTES } from './components.routes';
import { MatchComponent } from './match/match.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(COMPONENTS_ROUTES),
    FormsModule
  ],
  declarations: [
    MatchComponent
  ]
})
export class ComponentsModule { }
