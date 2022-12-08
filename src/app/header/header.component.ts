import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { IUser } from './leaderboard/users';
import { UsersService } from './leaderboard/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  loggedInUser: IUser | undefined;

  constructor(private auth: AuthService, private userService: UsersService) {
    let userId = this.auth.getUserId();
    this.userService.getUser(userId).subscribe((user) => {
      this.loggedInUser = user;
    });
  }

  ngOnInit(): void {}

  logout(): void {
    this.auth.logout();
  }

  isUserAdmin(): boolean {
    return this.auth.isAdmin();
  }
}
