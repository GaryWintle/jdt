export interface Question {
  id: number;
  questionText: string;
  correctAnswer: boolean;
  answerText: string;
  image?: {
    path: string;
    alt: string;
  };
}
