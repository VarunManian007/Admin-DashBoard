import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {servies} from '../servies';


@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  title ='app?';
  
  array:any=[];
  submit(form){
  console.log(form.value);
  }

  gothere(event:any)
  {
    console.log(event.target.value);
    this.array.push(event.target.value);
  }
  moveRight()
  {
    console.log(this.array); 
    
  }
  ngOnInit() {
  }
  savecompany(cmpform: NgForm): void{
    console.log(cmpform);
  }

  Servises:servies[]=[
    {name:'one'},
    {name:'two'},
    {name:'three'},
    {name:'four'},
    {name:'five'},
    {name:'six'}

  ];

}




