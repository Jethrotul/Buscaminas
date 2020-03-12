import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardgameComponent } from './boardgame/boardgame.component';
import { BoxComponent } from './box/box.component';



@NgModule({
  declarations: [BoardgameComponent, BoardgameComponent, BoxComponent],
  imports: [
    CommonModule
  ],
  exports: [BoardgameComponent]
})
export class BoardgameModule { }
