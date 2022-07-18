import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayText = false;
  a = []

  displayDetails(){
    // this.a.push(this.a.length + 1);
    this.a.push(new Date());
    this.displayText = !this.displayText;
  }
}





