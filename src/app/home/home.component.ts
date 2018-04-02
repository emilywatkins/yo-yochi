import { Component, OnInit } from '@angular/core';
import { Question } from '../question.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  questions: Question[] = [
    new Question("title1", "body1", 1),
    new Question("title2", "body2", 2)
  ];

  goToDetail(clickedQuestion: Question) {
    this.router.navigate(['questions', clickedQuestion.id]);
  };

}
