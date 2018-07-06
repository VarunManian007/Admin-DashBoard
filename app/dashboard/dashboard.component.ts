import { Component, OnInit,ViewChild,AfterViewInit,Input, forwardRef } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { DataService} from '../data.service';


declare var $:any;

interface Post{
  CName:String,
  Ctype:String,
  Cwebsite:String,
  Email:String,
  Contact:Number,
  Badd:String,
  Service:String[]


}

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls:['./dashboard.component.css']
})
export class DashboardComponent implements OnInit
{
 
  posts:Post[]
  
  ngOnInit(){

  }
        k=0;
        l=0;
        m=0;
        temp:any=[];
        temp1:any=[];
        temp2:any=[];
        selected:string='';
    
    prog:any=[];
    appr:any=[];
    rej:any=[];
    db:DashboardComponent;
    j=0;
    vp:boolean=false;
    ap:boolean=false;
    rp:boolean=false;
    alp:boolean=true;
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
                    "Contact":1234568,
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
                        var temp=[
                                                 ];
                        
                        for (i=0;i<this.Company.length;i++)
                        {   temp=[];
                          
                            if(con==this.Company[i].Contact)
                               this.Company[i].status=this.selected;

                            if(this.Company[i].status=="Progress" &&  i==j)
                            {  
                                temp.push(this.Company[i].CName,this.Company[i].Ctype,this.Company[i].CWebsite,this.Company[i].Email,this.Company[i].Contact,this.Company[i].Badd,this.Company[i].Service,"Progress");

                                this.prog.push(temp);
                            }
                            if(this.Company[i].status=="Approved" &&  i==j)
                            {   
                                temp.push(this.Company[i].CName,this.Company[i].Ctype,this.Company[i].CWebsite,this.Company[i].Email,this.Company[i].Contact,this.Company[i].Badd,this.Company[i].Service,"Approved");

                                this.appr.push(temp);
                            }
                            if(this.Company[i].status=="Rejected" &&  i==j)
                            {  
                                temp.push(this.Company[i].CName,this.Company[i].Ctype,this.Company[i].CWebsite,this.Company[i].Email,this.Company[i].Contact,this.Company[i].Badd,this.Company[i].Service,"Rejected");

                                this.rej.push(temp);
                            }
                        }
                        
                    console.log(this.prog);
                    
                    

              
                                
                        
                        
                    }

        viewProgress()
        {
          this.vp=true;
          this.ap=false;
          this.rp=false;
          this.alp=false;
          console.log(this.vp);
          console.log(this.prog);
        }
        viewApproved()
        {
          this.ap=true;
          this.vp=false;
          this.rp=false;
          this.alp=false;
          console.log(this.ap);
          console.log(this.appr);
        }
        viewRejected()
        {
          this.rp=true;
          this.alp=false;
          this.vp=false;
          this.ap=false;
          console.log(this.rp);
          console.log(this.rej);
        }
        viewAll()
        {
          this.alp=true;
          this.ap=false;
          this.vp=false;
          this.rp=false;
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