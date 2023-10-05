import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

increase= new Subject<number>();
reset= new Subject<number>();

constructor() { }


increaseCount(){

  this.increase.next(1)
}

resetCount(){
  this.reset.next(0)
}

}
