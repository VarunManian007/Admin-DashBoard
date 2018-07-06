import { Component, OnInit } from '@angular/core';
import { DashboardComponent }   from '../dashboard/dashboard.component';

@Component({
    selector: 'newpage-cmp',
   
    templateUrl: 'newpage.component.html',
    styleUrls:['./newpage.component.css']
})

export class newpageComponent implements OnInit{
    date:Date;
    cd:boolean=false;
    cpd:boolean=false;
    sd:boolean=false;
    constructor(){
       this.date=new Date();
    }
    
    ngOnInit(){}

    inputChange(){
        console.log("working")
        this.cd=true;
    }
    inputChange1(){
        console.log("working1");
        this.cpd=true;
    }
    inputChange2(){
        console.log("working2");
        this.sd=true;
    }
    saved(){
        this.cd=false;
        this.cpd=false;
        this.sd=false;
    }
}