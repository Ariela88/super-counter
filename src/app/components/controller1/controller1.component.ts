import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controller1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controller1.component.html',
  styleUrls: ['./controller1.component.scss']
})
export class Controller1Component {

  @Output() increase = new EventEmitter<number>()
  @Output() reset = new EventEmitter<number>()

  incrementCounter(){

    this.increase.emit(1);
  }

  resetCounter(){

    this.reset.emit(0)

  }

}
