import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})
export class QuestionDetailComponent implements OnInit {
  questionId: string;
  questionToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.route.params.forEach((URLParameters) => {
      this.questionId = URLParameters['id'];
    });
    this.questionToDisplay = this.questionService.getQuestionById(this.questionId);
  }
}
