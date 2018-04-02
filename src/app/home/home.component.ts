import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { Router } from '@angular/router';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [QuestionService]
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private questionService: QuestionService) { }

  ngOnInit() {
    this.questions = this.questionService.getQuestions();
  }

  questions: Question[];

  goToDetail(clickedQuestion: Question) {
    this.router.navigate(['questions', clickedQuestion.id]);
  };

}
