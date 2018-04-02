import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Question } from '../question.model';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css'],
  providers: [QuestionService]
})
export class QuestionDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.route.params.forEach((URLParameters) => {
      this.questionId = parseInt(URLParameters['id']);
    });
  }

  questionId: number = null;

}
