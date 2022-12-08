import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { IUser } from '../users';
import { UsersService } from '../users.service';
import { Sort } from '@angular/material/sort';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
})
export class LeaderboardComponent implements OnInit {
  displayedColumns: string[] = ['number', 'name', 'score'];
  dataSource: IUser[] = [];
  // dataSource!: MatTableDataSource<IUser>;

  constructor(private userService: UsersService) {
    this.getLeaderBoardData();
  }

  @ViewChild(MatSort) sort: MatSort | undefined;

  getLeaderBoardData() {
    this.userService.getUsers().subscribe((users) => {
      this.dataSource = users;
      // this.dataSource = new MatTableDataSource(users);
      // this.dataSource.sort = this.matSort;
    });
  }

  ngOnInit(): void {}
}
