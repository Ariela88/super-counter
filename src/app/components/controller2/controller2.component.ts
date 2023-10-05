import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-controller2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './controller2.component.html',
  styleUrls: ['./controller2.component.scss']
})
export class Controller2Component {

  constructor(private dataServ:DataService){}


  incrementCounter(){

    this.dataServ.increaseCount()

  }

  resetCounter(){
this.dataServ.resetCount()
  }
}
