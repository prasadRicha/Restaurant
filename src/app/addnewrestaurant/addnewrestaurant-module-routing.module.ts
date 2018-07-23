import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddnewrestaurantComponent } from 'src/app/addnewrestaurant/addnewrestaurant.component';

const routes: Routes = [

  {
    path:'',
    component:AddnewrestaurantComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddnewrestaurantModuleRoutingModule { }
