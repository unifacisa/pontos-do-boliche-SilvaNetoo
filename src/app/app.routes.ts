import { Routes } from "@angular/router";
import { MatchComponent } from "./components/match/match.component";

export const APP_ROUTES: Routes = [
    { path: '', component: MatchComponent },
    { path: '**', component: MatchComponent },
    { path: '', redirectTo: 'match', pathMatch: 'full' },
]