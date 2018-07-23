import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantlistComponent } from 'src/app/restaurantlist/restaurantlist.component';

const routes: Routes = [
  {

    path: '',
    component: RestaurantlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RestaurantlistRoutingModule { }
