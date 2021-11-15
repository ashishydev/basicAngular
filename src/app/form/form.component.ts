import { Component, OnInit,OnChanges,OnDestroy } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit ,OnChanges,OnDestroy{

  constructor() { 
    console.log('Constuctor called ');
    
  }

  ngOnInit(): void {
    console.log('ngOnInit called ');
    
  }
  ngOnChanges(): void {
    console.log('ngOnChanges called ');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy called ');
  }

}
