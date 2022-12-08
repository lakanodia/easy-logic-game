import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { AuthGuard } from './auth/guards/auth.guard';
import { NotfoundComponent } from './auth/notfound/notfound.component';
import { AdminPanelComponent } from './header/admin/admin-panel/admin-panel.component';
import { DashboardComponent } from './header/dashboard/dashboard.component';
import { GameBoardComponent } from './header/game/game-board/game-board.component';
import { HeaderComponent } from './header/header.component';
import { LeaderboardComponent } from './header/leaderboard/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  // { path: 'admin', component: HeaderComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: 'game', component: GameBoardComponent },
      { path: 'leaderboard', component: LeaderboardComponent },
      {
        path: 'admin',
        component: AdminPanelComponent,
        canActivate: [AuthGuard],
      },
    ],
    canActivate: [AuthGuard],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
