import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ParentComponent } from '../parent/parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent extends ParentComponent {

  constructor(http:HttpClient) {
    super(http);
   }
  // data:any[]
  ngOnInit(): void {
    this.http.get('https://api.github.com/users').subscribe(s=>{
      console.log('sfsdf');
      // data=s;
    })
  }

}
