import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  //[x: string]: () => void;
    obj:object;
    mani :any;
    currentValue = "hello";
  constructor(private dataList:DataService) { }
  submitF(event){
    console.log(event)
    console.log(this.obj);
    console.log(this.currentValue);
  }

  ngOnInit() {
    this.mani  = this.dataList.car;
  this.obj = {name :"mani prasad b"};
  }

}
