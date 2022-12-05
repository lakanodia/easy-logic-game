import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [CommonModule, HttpClientModule],
})
export class AdminModule {}
