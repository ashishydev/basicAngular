import { Component, Input, OnInit, Output ,EventEmitter, OnChanges, DoCheck} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit , OnChanges,DoCheck{
@Input() myCompany:string='';
@Output() myMessage:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  
  }
  ngOnChanges():void{
    console.log('OnChanges called');
    
  }
  ngDoCheck():void{
    
  }
  SendData() {
    this.myMessage.emit('Hi, From Details Component!');
  }

}
