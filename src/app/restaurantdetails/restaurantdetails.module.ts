import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantdetailsRoutingModule } from './restaurantdetails-routing.module';
import { RestaurantdetailsComponent } from 'src/app/restaurantdetails/restaurantdetails.component';

@NgModule({
  imports: [
    CommonModule,
    RestaurantdetailsRoutingModule
  ],
  declarations: [RestaurantdetailsComponent]
})
export class RestaurantdetailsModule { }
