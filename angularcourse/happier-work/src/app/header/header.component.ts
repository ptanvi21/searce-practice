import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen = true;
  openSideBar = false;
  showFiller = false;
  constructor() { }

  opened = false

  ngOnInit(): void {
  }

  onClickOpen(){
    this.openSideBar = !this.openSideBar;
  }

  toggleMenu(){
    this.isOpen = !this.isOpen;
  }

}
