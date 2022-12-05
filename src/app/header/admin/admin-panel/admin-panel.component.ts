import { Component, OnDestroy, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { AdminDialogComponent } from '../admin-dialog/admin-dialog.component';
import { Subscription } from 'rxjs';
import { IQuestion } from '../question';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})

export class AdminPanelComponent implements OnInit, OnDestroy {
  
  displayedColumns: string[] = [
    'id',
    'answer',
    'firstPicture',
    'secondPicture',
    'action',
  ];

  dataSource: IQuestion[] = [];

  questionSubscribtion: Subscription = new Subscription();

  constructor(
    private quesionService: QuestionService,
    private dialog: MatDialog
  ) {
    this.getQuestions();
  }

  ngOnInit(): void {}

  getQuestions() {
    this.questionSubscribtion = this.quesionService
      .getQuestions()
      .subscribe((questions) => (this.dataSource = questions));
  }

  delete(element: IQuestion) {
    this.quesionService
      .deleteQuestion(element.id)
      .subscribe(() => this.getQuestions());
  }
  openDialog() {
    this.dialog
      .open(AdminDialogComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((result) => {
        if (result === 'true') {
          setTimeout(() => this.getQuestions(), 500);
        }
      });
  }
  ngOnDestroy(): void {
    this.questionSubscribtion.unsubscribe();
  }
}

