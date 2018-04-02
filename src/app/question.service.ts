import { Injectable } from '@angular/core';
import { Question } from './question.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class QuestionService {

  questions;

  constructor(private database: AngularFireDatabase) {
    this.questions = database.list('questions');
  }

  getQuestions() {
    return this.questions;
  }

  getQuestionById(questionId: string) {
    return this.database.object('questions/' + questionId);
  }

}
