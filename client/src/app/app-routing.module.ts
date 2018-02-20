import { SeattleComponent } from "./seattle/seattle.component";
import { SanjoseComponent } from "./sanjose/sanjose.component";

// import { PageNotFoundComponent } from "./pagenotfound/pagenotfound.component"

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: "seattle", component: SeattleComponent },
  { path: "sanjose", component: SanjoseComponent },
  // { path: 'gamma/:id', component: GammaComponent },
  { path: "", pathMatch: "full", redirectTo: "" },
  { path: "**", component: "/PageNotFoundComponent" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






