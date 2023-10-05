import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'super-counter';
  incCounter1: any = { value: 0 };
  resCounter1: any = { value: 0 };
  incCounter2: any = { value: 0 };
  resCounter2: any = { value: 0 };
  incCounter3: any = { value: 0 };
  resCounter3: any = { value: 0 };

  increaseCalled(n: number, counter: string) {
    if (counter === 'counter1') {
      this.incCounter1 = { value: n };
    } else if (counter === 'counter2') {
      this.incCounter2 = { value: n };
    } else if (counter === 'counter3') {
      this.incCounter3 = { value: n };
    }
  }

  resetCaller(n: number, counter: string) {
    if (counter === 'counter1') {
      this.resCounter1 = { value: n };
    } else if (counter === 'counter2') {
      this.resCounter2 = { value: n };
    } else if (counter === 'counter3') {
      this.resCounter3 = { value: n };
    }
  }
}
