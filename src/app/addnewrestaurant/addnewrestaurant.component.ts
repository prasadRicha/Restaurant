import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/webservice';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addnewrestaurant',
  templateUrl: './addnewrestaurant.component.html',
  providers: [RestaurantService]
})
export class AddnewrestaurantComponent implements OnInit {
  dialogRef: any;
  restaurant={name:'',address:'',deal:''}
  constructor(private restaurantService: RestaurantService,private route:Router) { }

  ngOnInit() {
  }
addnewrestaurant(){
  debugger
  this.restaurantService.addnewrestaurant(this.restaurant).then(result=>{
    debugger;
  })
}
onClick(){
  this.route.navigateByUrl('/Restaurantlist')
}
}
