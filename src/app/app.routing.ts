import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
path:'',
redirectTo:'Addnewrestaurant',
pathMatch:'full'
  },
  {
    path: 'Addnewrestaurant',
    loadChildren: '../app/addnewrestaurant/addnewrestaurant-module.module#AddnewrestaurantModuleModule'
  },
  {
    path: 'Restaurantlist',
    loadChildren: '../app/restaurantlist/restaurantlist.module#RestaurantlistModule'
  },
  {
    path: 'restaurantdetails/:id',
    loadChildren: '../app/restaurantdetails/restaurantdetails.module#RestaurantdetailsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }