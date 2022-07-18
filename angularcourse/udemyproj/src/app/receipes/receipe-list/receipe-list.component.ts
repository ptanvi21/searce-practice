import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Receipe } from '../receipe.model';

@Component({
  selector: 'app-receipe-list',
  templateUrl: './receipe-list.component.html',
  styleUrls: ['./receipe-list.component.css']
})
export class ReceipeListComponent implements OnInit {
  @Output() receipeWasSelected = new EventEmitter<Receipe>();
  
  receipes: Receipe[] = [
    new Receipe('A Test Receipe', 'Simply a test', 'https://resize.img.allw.mn/thumbs/kj/od/gvt70uaj5ddc1e74b3de9835114424_1080x1080.jpg?width=1200&height=1200'),
    new Receipe('A Test Receipe', 'Simply a test', 'https://resize.img.allw.mn/thumbs/kj/od/gvt70uaj5ddc1e74b3de9835114424_1080x1080.jpg?width=1200&height=1200'),
    new Receipe('A Test Receipe', 'Simply a test', 'https://resize.img.allw.mn/thumbs/kj/od/gvt70uaj5ddc1e74b3de9835114424_1080x1080.jpg?width=1200&height=1200'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onReceipeSelected(receipe: Receipe) {
    this.receipeWasSelected.emit(receipe);
  }

}
