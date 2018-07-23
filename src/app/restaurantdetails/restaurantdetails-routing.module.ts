import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantdetailsComponent } from 'src/app/restaurantdetails/restaurantdetails.component';

const routes: Routes = [{
  path:'',
  component:RestaurantdetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantdetailsRoutingModule { }
