import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html'
})
export class PipeComponent implements OnInit {
  emplyoeeList:any[];

  constructor() { 
    this.emplyoeeList=[{name:'Ashish',Add:'Mumbai',ID:123,DOJ:new Date()},
                        {name:'Arun',Add:'Mumbai',ID:15423,DOJ:'09122020'},
                        {name:'Anita',Add:'Mumbai',ID:124353,DOJ:'09122020'},
                        {name:'Kam',Add:'Mumbai',ID:12533,DOJ:'09122020'}]
  }

  ngOnInit(): void {
  }

}
