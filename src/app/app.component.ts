import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  yourName="Ashish";
  disabledBox=true;
  getName(name1:string){
    alert(name1)
  };
  enableButton(){
    this.disabledBox=false;
  }
  shows=false;
}
