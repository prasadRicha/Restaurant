import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { RestaurantService } from 'src/app/webservice';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css'],
  providers: [RestaurantService]
})
export class RestaurantlistComponent implements OnInit {
  restraurantArr = [];
  restaurantdataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name','address', 'deal'];
 id:any
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private restaurantService: RestaurantService,private route:ActivatedRoute) {
    this.route.params.subscribe(params=>{
      this.id=params['id']
    })
   }
  ngOnInit() {
    debugger;
    this.getallrestaurant();
    
  }
  applyFilter(filterValue: string) {
    this.restaurantdataSource.filter = filterValue.trim().toLowerCase();
  }
  getallrestaurant() {
    this.restaurantService.getallrestaurant().then(restaurantData => {
      debugger;
      this.restraurantArr = restaurantData["restaurants"]
      this.restaurantdataSource = new MatTableDataSource(this.restraurantArr);
    this.restaurantdataSource.paginator = this.paginator;
      
    })
  }
}

