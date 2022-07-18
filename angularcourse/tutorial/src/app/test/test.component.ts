import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name = "";
  color = "blue";
  pipeVal = "Searce";
  pipeVal2 = "Welcome to Pune"

  person = {
    fname: "John",
    lname: "Doe",
  }

  date = new Date();

  @Input() parentData: any;
  @Output() childEvent = new EventEmitter();

  onClick(event : any){
    console.log(event.value);
  }
  constructor() { }

  ngOnInit(): void {
  }

  fireEvent(){
    this.childEvent.emit('Welcome')
  }

}
