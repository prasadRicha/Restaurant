import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddnewrestaurantModuleRoutingModule } from './addnewrestaurant-module-routing.module';
import { AddnewrestaurantComponent } from 'src/app/addnewrestaurant/addnewrestaurant.component';
import { MatDialogModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    HttpModule,
    AddnewrestaurantModuleRoutingModule
  ],
  declarations: [AddnewrestaurantComponent]
})
export class AddnewrestaurantModuleModule { }
