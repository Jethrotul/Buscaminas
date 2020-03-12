import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  randomizeBomb = Math.random();

  flipbox() {
    const isClicked = true;
    console.log(this.randomizeBomb);
    if (this.randomizeBomb >= 0.8) {
      console.log('Bomb');
    } else {
      console.log('Safe');
    }
  }
  constructor() {
    const isClicked: boolean = false;

  }

  ngOnInit(): void {}
}
