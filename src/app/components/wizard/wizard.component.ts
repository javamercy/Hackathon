import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { wizardData } from '../../data/wizard-data';
import { WizardQuestion, UserResponse } from '../models/wizard-model';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent implements OnInit {
  wizardData: WizardQuestion[] = wizardData;
  currentCategory = 0;
  responses: UserResponse[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    // Initialize responses array
    this.wizardData.forEach((category, categoryIndex) => {
      category.questions.forEach((_, questionIndex) => {
        this.responses.push({
          categoryIndex,
          questionIndex,
          rating: 0,
        });
      });
    });
  }

  getCurrentTitle(): string {
    return this.wizardData[this.currentCategory].title;
  }

  getCurrentQuestions(): string[] {
    return this.wizardData[this.currentCategory].questions;
  }

  setRating(questionIndex: number, rating: number) {
    const responseIndex = this.responses.findIndex(
      (r) =>
        r.categoryIndex === this.currentCategory &&
        r.questionIndex === questionIndex
    );
    this.responses[responseIndex].rating = rating;
  }

  getRating(questionIndex: number): number {
    const response = this.responses.find(
      (r) =>
        r.categoryIndex === this.currentCategory &&
        r.questionIndex === questionIndex
    );
    return response?.rating || 0;
  }

  nextCategory() {
    if (this.currentCategory < this.wizardData.length - 1) {
      this.currentCategory++;
    } else {
      // Store responses and navigate to results
      localStorage.setItem('wizardResponses', JSON.stringify(this.responses));
      this.router.navigate(['/main']);
    }
  }

  previousCategory() {
    if (this.currentCategory > 0) {
      this.currentCategory--;
    }
  }

  isLastCategory(): boolean {
    return this.currentCategory === this.wizardData.length - 1;
  }

  canGoNext(): boolean {
    return this.getCurrentQuestions().every(
      (_, index) => this.getRating(index) > 0
    );
  }
}
