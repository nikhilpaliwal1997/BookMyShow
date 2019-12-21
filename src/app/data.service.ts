import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  car = [{name:"maniprasad",email:"bmaniprasad07@gmail.com", lastName:"bandaru"},{name:"maniprasad1",email:"bmaniprasad07@gmail.com", lastName:"bandaru"},{name:"maniprasad2",email:"bmaniprasad07@gmail.com", lastName:"bandaru"}];

  myData(){
    return "This Data"
  }
}
