import { Component, OnInit } from '@angular/core';

import { interval, take } from 'rxjs';
import { IQuestion } from '../../admin/question';

import { QuestionService } from '../../admin/question.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  isStartButtonVisible: boolean = true;
  isGameLogicVisible: boolean = true;
  correctAnswerScore: number = -1;

  ticker!: number;
  gameQuestion: IQuestion | undefined;
  allQuestions: IQuestion[] = [];
  questionIndex: number = 0;
  hint: string = '********';
  userAnswer: string = '';

  constructor(private questionService: QuestionService) {}

  ngOnInit(): void {}

  startGame() {
    this.isStartButtonVisible = false;
    this.startTimer();
    this.questionService.getQuestions().subscribe((questions: IQuestion[]) => {
      this.allQuestions = questions;
      this.nextQuestion();
    });
  }

  startTimer() {
    this.ticker = 60;
    const numbers = interval(1000);
    const countdown = numbers.pipe(take(this.ticker));
    countdown.subscribe((x) => {
      this.ticker -= 1;
      if (this.ticker == 0) {
        this.outOfTime();
      }
    });
  }

  nextQuestion() {
    if (this.gameQuestion && this.gameQuestion.answer != this.userAnswer) {
      alert('Wrong Answer');
    } else {
      this.gameQuestion = this.allQuestions[this.questionIndex];
      this.hint = this.generateHint(this.gameQuestion.answer);
      this.questionIndex++;
      this.correctAnswerScore++;
      console.log(this.correctAnswerScore);
      
    }
  }

  generateHint(answer: string): string {
    let answerLengh = answer.length;
    let r = this.getRandomInt(answerLengh);
    let masked = '*'.repeat(answerLengh);
    return this.replaceChar(masked, answer[r], r);
  }

  replaceChar(origString: string, replaceChar: string, index: number): string {
    let firstPart = origString.substr(0, index);
    let lastPart = origString.substr(index + 1);

    let newString = firstPart + replaceChar + lastPart;
    return newString;
  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  outOfTime() {
    console.log('Time Over');
    this.isGameLogicVisible = false;
  }
}
