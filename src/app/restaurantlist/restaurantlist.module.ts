import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantlistRoutingModule } from './restaurantlist-routing.module';
import { RestaurantlistComponent } from 'src/app/restaurantlist/restaurantlist.component';
import { MatTableModule,MatPaginatorModule} from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    HttpModule,
    RestaurantlistRoutingModule
  ],
  declarations: [RestaurantlistComponent]
})
export class RestaurantlistModule { }
