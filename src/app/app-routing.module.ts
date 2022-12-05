import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth/auth.component';
import { NotfoundComponent } from './auth/notfound/notfound.component';
import { DashboardComponent } from './header/dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'login', component: AuthComponent },
  { path: 'admin', component: HeaderComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
