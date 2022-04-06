import { Component } from '@angular/core';
import arrayWords from "../utils/words"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';
  words =''
  limit:number= 10;

  getLimit(newlimit:number)
  {
    
    this.limit= newlimit;
  }
  
  generateWords(){
    this.words= arrayWords.splice(0, this.limit).join(" ");
  }

  reset()
  {
    this.limit=0;
  }


}
