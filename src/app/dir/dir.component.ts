import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dir',
  templateUrl: './dir.component.html',
  styleUrls: ['./dir.component.css']
})
export class DirComponent implements OnInit {
  
  num:number;
  alphabet:string;
  colors:string[];
  color:string;
  constructor() {
    this.num=2;
    this.alphabet="a";
    this.colors =["orange","yellow","blue","red"];
    this.color="red"
   }

  ngOnInit(): void {
   
    

  }

}
