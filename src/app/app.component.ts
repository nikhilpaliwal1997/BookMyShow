import { Component } from '@angular/core';
import { DataService} from '../app/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  mani :any;
  show = false;
  constructor(private dataList:DataService){
 
  }
  ngOnInit()
  {
    this.mani  = JSON.stringify(this.dataList.car);
    console.log(this.mani)
    console.log(this.dataList.myData())
  }
}
