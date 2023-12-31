import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';
import { CounterService } from 'src/app/services/counter.service';

@Component({
  selector: 'app-counter2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.scss']
})
export class Counter2Component implements OnInit{

  constructor(private counter:CounterService){}

  ngOnInit(): void {
    this.counter.count.subscribe(v => this.count = v)
}

  count: number = 0
  @Input() set increase2(valueContainer: any) {

    this.count = this.count + valueContainer.value

  }


  @Input() set reset2(valueContainer: any) {
    this.count = valueContainer.value;

  }

}
