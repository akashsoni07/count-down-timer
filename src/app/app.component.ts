import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  timer: number = 35
  interval: any;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timer > 0) {
        this.timer--;
      } else {
        this.timer = 35;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
}
