import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuestionService]
})
export class HomeComponent implements OnInit {
  questions: FirebaseListObservable<any[]>;

  constructor(
    private router: Router,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  goToDetail(clickedQuestion) {
    this.router.navigate(['questions', clickedQuestion.$key]);
  };

  submitForm(title: string) {
  var newQuestion: Question = new Question(title);
  this.questionService.addQuestion(newQuestion);
  }
}
