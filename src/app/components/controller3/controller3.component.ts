import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-controller3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controller3.component.html',
  styleUrls: ['./controller3.component.scss']
})
export class Controller3Component {

  constructor(private counter:CounterService){}

  @Output() increase = new EventEmitter<number>()
  @Output() reset = new EventEmitter<number>()

  incrementCounter3(){

    this.increase.emit(1);
  }

  resetCounter3(){
console.log('reset 3')
    this.reset.emit(0)

  }
}
