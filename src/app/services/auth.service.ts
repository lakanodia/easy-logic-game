import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, of, throwError } from 'rxjs';
import { UsersService } from '../header/leaderboard/users.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private userService: UsersService) {}

  setUserRoleAndId(role: string, id: string) {
    this.setUserRole(role);
    this.setUserId(id);
  }

  private setUserRole(token: string): void {
    localStorage.setItem('token', token);
  }

  private setUserId(id: string): void {
    localStorage.setItem('userId', id);
  }

  getUserId(): number {
    let userId = localStorage.getItem('userId');
    if (!userId) {
      throw new Error('Failed to Login');
    }
    return parseInt(userId);
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
    return this.userService.findUsers(email, password).pipe(
      map((users: IUser[]) => {
        if (users.length == 0) {
          throw new Error('Failed to Login');
        }
        let user = users[0];
        if (user.isAdmin) {
          this.setUserRole('admin');
        } else {
          this.setUserRole('user');
        }
        this.setUserId(user.id.toString());
        return of({ name: user.name, email: user.email });
      })
    );
  }

  isAdmin(): boolean {
    return this.getToken() == 'admin';
  }
}
