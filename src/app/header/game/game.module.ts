import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameBoardComponent } from './game-board/game-board.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';

@NgModule({
  declarations: [GameBoardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
  ],
  exports: [GameBoardComponent],
})
export class GameModule {}
