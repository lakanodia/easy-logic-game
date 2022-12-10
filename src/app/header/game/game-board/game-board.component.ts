import { Component, OnInit } from '@angular/core';
import { interval, Observable, take } from 'rxjs';
import { IQuestion } from '../../admin/question';
import { QuestionService } from '../../admin/question.service';
import { delay, map, merge, skip, Subject, tap } from 'rxjs';
import { UsersService } from '../../leaderboard/users.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.scss'],
})
export class GameBoardComponent implements OnInit {
  isStartButtonVisible: boolean = true;
  isGameLogicVisible: boolean = true;
  isTimerHide: boolean = true;
  isSkipButtonVisible: boolean = true;
  userScore: number;
  ticker!: number;
  gameQuestion: IQuestion | undefined;
  allQuestions: IQuestion[] = [];
  questionIndex: number = 0;
  hint: string = '********';
  userAnswer: string = '';

  constructor(private questionService: QuestionService, private userService: UsersService, private authService: AuthService) {
    this.userScore = 0;
  }

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

  checkAnswer() {
    console.log('KeyUp');
    if (this.isCorrectAnswer()) {
      this.userScore++;
      this.nextQuestion();
      this.userAnswer = '';
    }
  }

  skipQuestion() {
    this.nextQuestion();
    this.isSkipButtonVisible = false;
  }

  isCorrectAnswer(): boolean {
    if (this.gameQuestion && this.gameQuestion.answer != this.userAnswer) {
      return false;
    } else {
      return true;
    }
  }

  nextQuestion() {
    this.gameQuestion = this.allQuestions[this.questionIndex];
    if (this.gameQuestion) {
      this.hint = this.generateHint(this.gameQuestion.answer);
      this.questionIndex++;
    } else {
      this.onGameOver();
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
    this.onGameOver();
    this.isTimerHide = false;
    setTimeout(() => {
      this.isTimerHide = true;
    }, 2000);
  }

  onGameOver(): void {
    this.isGameLogicVisible = false;
    this.userService.updateScore(this.authService.getUserId(), this.userScore).subscribe((data) =>{console.log(data);
    });
  }
}
