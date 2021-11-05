import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ]
})
export class ParentComponent implements OnInit {

  
  constructor(protected http:HttpClient) { }

  ngOnInit(): void {
      this.http.get('https://api.github.com/users').subscribe(s=>{
        console.log(s);
        // data=s;
      })
    }

}
