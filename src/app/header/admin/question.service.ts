import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INewQuestion, IQuestion } from './question';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
  constructor(private httpClient: HttpClient) {}

  getQuestions(): Observable<IQuestion[]> {
    return this.httpClient.get<IQuestion[]>('http://localhost:3000/questions');
  }
  deleteQuestion(id: number): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/questions/' + id);
  }
  addQuestion(data: INewQuestion) {
    return this.httpClient.post<INewQuestion>(
      'http://localhost:3000/questions/',
      data
    );
  }
}
