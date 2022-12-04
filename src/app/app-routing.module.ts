import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './header/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'admin', component: DashboardComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // {
  //   path: 'admin',
  //   canActivate: [AuthGuard],
  //   loadChildren: () =>
  //     import('./modules/admin/admin.module').then((m) => m.AdminModule),
  // },
  // { path: '**', component: AdminPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
