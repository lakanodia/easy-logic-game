import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderRoutingModule } from './header-routing.module';
import { HeaderComponent } from './header.component';
import { MatTabsModule } from '@angular/material/tabs';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [HeaderComponent, DashboardComponent],
  imports: [CommonModule, HeaderRoutingModule, MatTabsModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
