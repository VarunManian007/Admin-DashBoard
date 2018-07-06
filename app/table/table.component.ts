import { Component, OnInit,Input,ViewChild,AfterContentInit, forwardRef, AfterViewInit } from '@angular/core';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DataService } from '../data.service';




@Component({
    selector: 'table-cmp',
    moduleId: module.id,
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
    
   constructor(private data:DataService){
        
   }
  
    
    selected:string='';
    posts:Post[];
    prog:any=[];
    appr:any=[];
    rej:any=[];
    db:DashboardComponent;
    j=0;
    
    Company=[
                {
                    "CName":"XYZ",
                    "Ctype":"ABC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":123456,
                    "status":"",
                    "Badd":"hvhjdvdjvhjvddahchjvd",
                    "Service":["Plumbing","Carpentry","Polishing"]
                    
                },
                {
                    "CName":"XY",
                    "Ctype":"AC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":123457,
                    "status":"",
                    "Badd":"jhdjdjhfasjghgh,svhjsd",
                    "Service":["Painting","Plumbing","Cleaning"]
                },
                {
                    "CName":"Abc",
                    "Ctype":"xyz",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":123476,
                    "status":"",
                    "Badd":"jhdjdjhfasjghgh,svhjsd",
                    "Service":["Painting","Plumbing","Cleaning"]
                },
                {
                    "CName":"XYZ",
                    "Ctype":"ABC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":127456,
                    "status":"",
                    "Badd":"hvhjdvdjvhjvddahchjvd",
                    "Service":["Plumbing","Carpentry","Polishing"]
                },
                {
                "CName":"XYZ",
                    "Ctype":"ABC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":827456,
                    "status":"",
                    "Badd":"hvhjdvdjvhjvddahchjvd",
                    "Service":["Plumbing","Carpentry","Polishing"]
                },
                {
                    "CName":"XY",
                    "Ctype":"AC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":103456,
                    "status":"",
                    "Badd":"jhdjdjhfasjghgh,svhjsd",
                    "Service":["Painting","Plumbing","Cleaning"]
                },
                {
                    "CName":"Abc",
                    "Ctype":"xyz",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":153456,
                    "status":"",
                    "Badd":"jhdjdjhfasjghgh,svhjsd",
                    "Service":["Painting","Plumbing","Cleaning"]
                },
                {
                    "CName":"XYZ",
                    "Ctype":"ABC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":123056,
                    "status":"",
                    "Badd":"hvhjdvdjvhjvddahchjvd",
                    "Service":["Plumbing","Carpentry","Polishing"]
                },
                {
                    "CName":"XYZ",
                    "Ctype":"ABC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":123356,
                    "status":"",
                    "Badd":"hvhjdvdjvhjvddahchjvd",
                    "Service":["Plumbing","Carpentry","Polishing"]
                },
                {
                    "CName":"XY",
                    "Ctype":"AC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":123450,
                    "status":"",
                    "Badd":"jhdjdjhfasjghgh,svhjsd",
                    "Service":["Painting","Plumbing","Cleaning"]
                },
                {
                    "CName":"Abc",
                    "Ctype":"xyz",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":1234560,
                    "status":"",
                    "Badd":"jhdjdjhfasjghgh,svhjsd",
                    "Service":["Painting","Plumbing","Cleaning"]
                },
                {
                    "CName":"XYZ",
                    "Ctype":"ABC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":1234569,
                    "status":"",
                    "Badd":"hvhjdvdjvhjvddahchjvd",
                    "Service":["Plumbing","Carpentry","Polishing"]
                },
                {
                    "CName":"XYZ",
                    "Ctype":"ABC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":1234561,
                    "status":"",
                    "Badd":"hvhjdvdjvhjvddahchjvd",
                    "Service":["Plumbing","Carpentry","Polishing"]
                },
                {
                    "CName":"XY",
                    "Ctype":"AC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":1234569,
                    "status":"",
                    "Badd":"jhdjdjhfasjghgh,svhjsd",
                    "Service":["Painting","Plumbing","Cleaning"]
                },
                {
                    "CName":"Abc",
                    "Ctype":"xyz",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":1234567,
                    "status":"",
                    "Badd":"jhdjdjhfasjghgh,svhjsd",
                    "Service":["Painting","Plumbing","Cleaning"]
                },
                {
                    "CName":"XYZ",
                    "Ctype":"ABC",
                    "CWebsite":"XYZ@Abc.com",
                    "Email":"vard@gmail.com",
                    "Contact":1234565,
                    "status":"",
                    "Badd":"hvhjdvdjvhjvddahchjvd",
                    "Service":["Plumbing","Carpentry","Polishing"]
                }
            ];
        
            selectChangeHandler(event:any,con:number,j:number)
            {
                        this.selected=event.target.value;
                        var i;
                        var temp=[];
                        
                        for (i=0;i<this.Company.length;i++)
                        {   temp=[];
                            if(con==this.Company[i].Contact)
                               this.Company[i].status=this.selected;

                            if(this.Company[i].status=="Progress" &&  i==j)
                            {   
                                temp.push([this.Company[i].CName,this.Company[i].Ctype,this.Company[i].CWebsite,this.Company[i].Email,this.Company[i].Contact,this.Company[i].Badd,this.Company[i].Service,"Progress"]);

                                this.prog.push(temp);
                            }
                            if(this.Company[i].status=="Approved" &&  i==j)
                            {   
                                temp.push([this.Company[i].CName,this.Company[i].Ctype,this.Company[i].CWebsite,this.Company[i].Email,this.Company[i].Contact,this.Company[i].Badd,this.Company[i].Service,"Approved"]);

                                this.appr.push(temp);
                            }
                            if(this.Company[i].status=="Rejected" &&  i==j)
                            {  
                                temp.push([this.Company[i].CName,this.Company[i].Ctype,this.Company[i].CWebsite,this.Company[i].Email,this.Company[i].Contact,this.Company[i].Badd,this.Company[i].Service,"Rejected"]);

                                this.rej.push(temp);
                            }
                        }
                        
                    
                    
                    

              
                                
                        
                        
                    }
                    
                   
    ngOnInit(){
         this.data.getPosts().subscribe((posts)=>{
             this.posts=posts;
             
         })
        //console.log(this.Progress);
       //this.data.currentMessage.subscribe(Progress=>this.Progress=Progress);
    //console.log(this.Progress);
    //console.log(this.data.currentMessage.subscribe(Prog=>this.Prog=Prog));
    }
    

}
interface Post{
    CName:String,
    Ctype:String,
    Cwebsite:String,
    Email:String,
    Contact:Number,
    Badd:String,
    Service:String[],
    status:String


}