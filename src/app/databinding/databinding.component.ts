import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent implements OnInit {

  name:string;
  company:string;
  constructor() {
    this.name="Ashish"
    this.company="CG"
   }

  ngOnInit(): void {
   
  }
  greet(){
   // alert(`'Hi'${name}`)
  }

}
