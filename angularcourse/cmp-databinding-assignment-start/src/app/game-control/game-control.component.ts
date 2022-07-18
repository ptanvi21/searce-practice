import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStart(){
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.number+1);
      this.number++;
    },1000)
  }

  onStop(){
    clearInterval(this.interval);
  }

}
