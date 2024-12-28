export interface WizardQuestion {
  title: string;
  questions: string[];
}

export interface UserResponse {
  categoryIndex: number;
  questionIndex: number;
  rating: number;
}
