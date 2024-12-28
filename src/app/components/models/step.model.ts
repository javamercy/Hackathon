export interface Step {
  text: string;
  options?: string[];
  nextSteps?: Step[] | null;
}
