import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-uber-controller',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './uber-controller.component.html',
  styleUrls: ['./uber-controller.component.scss']
})
export class UberControllerComponent {

constructor(private counter:CounterService){}



  incrementAll(){

    this.counter.increaseCount()
  }




  resetAll(){

    this.counter.resetCount()
  }



}
