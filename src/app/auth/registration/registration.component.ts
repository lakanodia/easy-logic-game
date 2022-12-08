import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/header/leaderboard/users';
import { UsersService } from 'src/app/header/leaderboard/users.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  hide: boolean = true;
  registrationForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    admin: new FormControl(''),
  });

  constructor(
    private userService: UsersService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get password() {
    return this.registrationForm.get('password') as FormControl;
  }
  get name() {
    return this.registrationForm.get('name') as FormControl;
  }
  get lastname() {
    return this.registrationForm.get('lastname') as FormControl;
  }

  get admin() {
    return this.registrationForm.get('admin') as FormControl;
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePass() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  getErrorMessageName() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid name' : '';
  }
  getErrorMessageLastName() {
    if (this.password.hasError('required')) {
      return 'You must enter a value';
    }
    return this.password.hasError('password') ? 'Not a valid lastname' : '';
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      this.userService
        .createUser(<IUser>this.registrationForm.value)
        .subscribe((result) => {
          if (this.admin.value) {
            this.authService.setUserRoleAndId('admin', result.id.toString());
          } else {
            this.authService.setUserRoleAndId('user', result.id.toString());
          }
          this.router.navigate(['leaderboard']);
        });
    }
  }
}
