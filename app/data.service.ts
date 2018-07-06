import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Observable } from 'rxjs/Observable'
import { DashboardComponent } from './dashboard/dashboard.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';




@Injectable()
export class DataService{
    private listener=new Subject<any>();
    listen():Observable<any>{
        return this.listener.asObservable();
    }
    constructor(public http:Http)
    {
        console.log('Data service has started....');
    }
  
   getPosts(){
//return this.http.get('http://jsonplaceholder.typicode.com/posts').map(res=>res.json());
return this.http.get('http://shivamclasses.net/location/data.json').map(res=>res.json());
        
    }
    
    
    
}