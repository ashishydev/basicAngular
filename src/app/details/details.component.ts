import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent implements OnInit {
@Input() myCompany:string='';
@Output() myMessage:EventEmitter<string>=new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  
  }
  SendData() {
    this.myMessage.emit('Hi, From Details Component!');
  }

}
