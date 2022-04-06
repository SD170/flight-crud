import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: "", redirectTo: "/add", pathMatch: "full" },
  {path:"add",component:AddComponent},
  {path:"list",component:ListComponent},
  {path:"search",component:SearchComponent},
  { path: "**", redirectTo: "/list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
