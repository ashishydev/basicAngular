import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {
  id:number=0;
  name:string='';
  Add:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(p=>{
      if(p!=undefined){
        this.id=p.id;
        console.log(p);
        this.name=p.name;
        this.Add=p.Add;
      }
      
    });
  }

}
