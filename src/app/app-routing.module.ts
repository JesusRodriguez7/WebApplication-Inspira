import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {ReviewsComponent} from "./pages/reviews/reviews.component";
import {ListComponent} from "./pages/list/list.component";
import {ReviewComponent} from "./pages/review/review.component";

const routes:Routes= [

  {path:'reviews',component:ReviewsComponent},
  {path:'list',component:ListComponent},
  {path:'review/:id',component:ReviewComponent},
  {path:'search/:text',component:ReviewsComponent},

  {path:'',pathMatch:'full',redirectTo:'/reviews'},
  {path:'**',pathMatch:'full',redirectTo:'/reviews'},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
