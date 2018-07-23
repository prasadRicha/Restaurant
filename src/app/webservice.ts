import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import { map } from 'rxjs/operators';
import { Promise, reject } from 'q';
@Injectable()

export class RestaurantService {
apiUrl="http://demo3624766.mockable.io/"
  constructor(private http: Http) { }
  getallrestaurant(){
     // let header={'Content-Type':application/json}
    return  Promise((reslove,reject)=>{
        let headers=new Headers();
        headers.append('Content-Type','application/json');
        this.http.get(this.apiUrl+'getallrestaurant',{headers:headers})
        .subscribe(res=>{
            reslove(res.json());
        },
    (err)=>{
        reject(err);
    });
    });
}
addnewrestaurant(restaurant){
    let data={ "restaurants": [
        { 
            "name":restaurant.name, 
            "address":restaurant.address,
            "deal":restaurant.deal
        }] }
    return  Promise((reslove,reject)=>{
        let headers=new Headers();
        headers.append('Content-Type','application/json');
        this.http.post(this.apiUrl+'getallrestaurant',{headers:headers})
        .subscribe(res=>{
            reslove(res.json());
        },
    (err)=>{
        reject(err);
    });
    }); 
}
}