import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  count = new BehaviorSubject<number>(0);

  increaseCount() {
    console.log('pippo')
    const actualCount = this.count.value;
    const increasedCount = actualCount + 1
    this.count.next(increasedCount)

  }



  resetCount() {

    this.count.next(0)
  }

}
