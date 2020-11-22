import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  homework: Task[]=[{
    id: 1,
    name: 'task1',
    status: false
  }, {
    id: 2,
    name: 'task2',
    status: true
  }, {
    id: 3,
    name: 'task3',
    status: false
  }, {
    id: 4,
    name: 'task4',
    status: true
  }, {
    id: 5,
    name: 'task5',
    status: true
  }];
  ngOnInit(){
    console.log(this.calcPrice(1000,30))
  }
  calcPrice(price:number, sale:number):number{
    price-=price*sale/100;
    return price;
  }

}
