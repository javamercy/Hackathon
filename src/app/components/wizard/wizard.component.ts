import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { wizardData } from '../../data/wizard-data';
import { UserResponse, WizardCategory } from '../models/wizard.model';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-wizard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css'],
})
export class WizardComponent implements OnInit {
  wizardData: WizardCategory[] = wizardData;
  currentCategory = 0;
  responses: UserResponse[] = [];

  showResults: boolean = false;

  constructor(private router: Router, private themeService: ThemeService) {}

  ngOnInit() {
    // Initialize responses array
    this.wizardData.forEach((category, categoryIndex) => {
      category.questions.forEach((_: any, questionIndex: any) => {
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
      // Store responses and show the result wizard which is gonna have two options : Redirect to chatbot with "Kıvılcım" for females and "Fikret" for males.
      localStorage.setItem('wizardResponses', JSON.stringify(this.responses));
      this.showResults = true;
    }

    document.body.scrollTop = 0;
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

  onFemaleBtnClick() {
    this.themeService.setTheme('female');
    this.router.navigate(['/chat']);
  }

  onMaleBtnClick() {
    this.themeService.setTheme('male');
    this.router.navigate(['/chat']);
  }
}
