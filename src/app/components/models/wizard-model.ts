export interface WizardCategory {
  title: string;
  questions: string[];
}

export interface UserResponse {
  categoryIndex: number;
  questionIndex: number;
  rating: number;
}

export interface WizardState {
  currentCategory: number;
  responses: UserResponse[];
}
