import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Podcast1Component } from './podcast1/podcast1.component';

const routes: Routes = [
  {path:'',component:Podcast1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
