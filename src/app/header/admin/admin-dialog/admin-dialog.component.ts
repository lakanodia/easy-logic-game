import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { INewQuestion } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-admin-dialog',
  templateUrl: './admin-dialog.component.html',
  styleUrls: ['./admin-dialog.component.scss']
})
export class AdminDialogComponent implements OnInit {
  
  questionForm = new FormGroup({
    answer: new FormControl('', [Validators.required]),
    firstPicture: new FormControl('', [Validators.required]),
    secondPicture: new FormControl('', [Validators.required]),
  });
  constructor(private questionService: QuestionService, private dialog:MatDialog)  {}

  ngOnInit(): void {}
  onAddQuestion() {
    console.log(this.questionForm.value);
    if (this.questionForm.valid) {
      this.questionService
        .addQuestion(this.questionForm.value as INewQuestion)
        .subscribe((data) => {
          this.questionForm.reset();
          this.dialog.closeAll();
        });
      error: () => {
        alert('ERR');
      };
    }
  }

}
