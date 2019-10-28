import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-component2]',
   templateUrl: './component2.component.html',
//   template:`<div>
//   Welcome {{name}}
//  <h2> {{2+2}}</h2>
//  <h2>{{"Welcome" + name }}</h2>
//  {{name.length}}
//  {{name.toUpperCase()}}
//  <h2>{{greetUser()}}</h2>
//   </div>`,
  styleUrls: ['./component2.component.css']
//  styles:[`
//    div{
//      color:red
//    }
//  `]
})
export class Component2Component implements OnInit {

  public name = "Imneet";

  constructor() { }

  ngOnInit() {
  }

  onClick(){
    console.log('Welcome to Code Stack')
    this.greeting="Welcome Here"
  }

  logMessage(value){
    console.log(value)
  }

  greetUser(){
    return "Hello" + this.name;
  }
  public greeting ="";
  public siteUrl = window.location.href;
  public myId = "testId";
  public successClass ="text-success";
  public hasError = false;
  public isSpecial =true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger":this.hasError,
    "text-special":this.isSpecial
  }
  public highlightColor = "orange"
  public titleStyles ={
    color: "blue",
    fontStyle: "italic"
  }
  public bindingName ="";
  public displayName =false;
  public color = "";
  public colors =["red","blue","green","yellow"];

}
