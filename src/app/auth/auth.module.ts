import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    RegistrationComponent,
    LoginComponent,
    AuthComponent,
    NotfoundComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatCheckboxModule,
    MatCardModule,
  ],
  exports: [RegistrationComponent, LoginComponent, AuthComponent],
})
export class AuthModule {}
