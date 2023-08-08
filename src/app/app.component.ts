import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Start';
  theID = "001";
  txt1 = "";
  txt2 : any;
  txt3 : any;
  color = true;
  italic = true;
  myClass = {
    "danger" : this.color,
    "italic" : this.italic
  }
  constructor(){
    
  }
  yourFunction(txt:any){
    this.txt1 = txt;
      console.log(txt);
  }
  onClick(txt:any){
    this.txt3 = txt;
    console.log(this.txt3);
  }
}
