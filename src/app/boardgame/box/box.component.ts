import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {
  randomizeBomb = Math.random();
  isClicked = false;
  isBomb: boolean;
  boxstyle = 'box-style';

  public clickbox() {

    if (this.randomizeBomb >= 0.8 ) {
      this.isClicked = true;
      console.log(this.randomizeBomb);
      return this.isBomb = true,
            this.isClicked = true,
            this.boxstyle = 'box-mine';

    } else {
      this.isClicked = true;
      console.log(this.randomizeBomb);
      return this.isBomb = false,
            this.isClicked = true,
            this.boxstyle = 'box-safe';
    }
  }
  constructor() {
  }

  ngOnInit(): void {}
}
