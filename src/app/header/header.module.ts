import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AdminModule } from './admin/admin-panel/admin.module';
import { GameModule } from './game/game.module';
import { LeaderboardModule } from './leaderboard/leaderboard.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    AdminModule,
    GameModule,
    LeaderboardModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [HeaderComponent],
})
export class HeaderModule {}
