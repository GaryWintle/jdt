import { Question } from '@/types/quiz';

const testQuestions: Question[] = [
  {
    id: 1,
    questionText:
      'When driving in groups, you must not zigzag, cut off other vehicles, or engage in behaviors that would impede the safe driving of others.',
    correctAnswer: true,
    answerText: 'This statement is correct.',
  },
  {
    id: 2,
    questionText:
      'While driving on a national expressway, you realized that one of the packages fell off, so you took appropriate measures to remove it to prevent vehicles traveling behind from colliding with it.',
    correctAnswer: true,
    answerText: 'This statement is correct.',
  },
  {
    id: 3,
    questionText:
      'On a motor highway where the traffic sign shown in the diagram is displayed, trailers, as a general rule, must proceed in the leftmost vehicular lane of the main through lanes.',
    correctAnswer: true,
    answerText: 'This statement is correct.',
  },
  {
    id: 4,
    questionText:
      'The centrifugal force diminishes as speed increases and the radius of a curve decreases.',
    correctAnswer: false,
    answerText:
      'Centrifugal force increases, not decreases, with increasing speed and decreasing radius of a curve.',
  },
  {
    id: 5,
    questionText:
      'It is safer to reduce speed when driving at night because the headlights of oncoming vehicles can reduce visibility and block the view of pedestrians walking in the middle of the road.',
    correctAnswer: true,
    answerText:
      'This statement is correct. You should reduce speed when driving at night.',
  },
  {
    id: 6,
    questionText:
      'In areas regulated by the traffic sign shown in the diagram, you must park at the position where Vehicle B is parked.',
    correctAnswer: true,
    answerText:
      "This traffic sign designates 'Starting point of traffic regulation for no parking,' therefore Vehicle B is not allowed to park there.",
  },
  {
    id: 7,
    questionText:
      'You must not overtake other vehicles at or around the top of uphill slopes.',
    correctAnswer: true,
    answerText:
      'Overtaking is prohibited at or around the top of uphill slopes.',
  },
  {
    id: 8,
    questionText:
      'When it is foggy, you should sound your car horn when needed to avoid danger.',
    correctAnswer: true,
    answerText: 'This statement is correct.',
  },
  {
    id: 9,
    questionText:
      'When driving toward an intersection and an emergency vehicle approached, you proceeded into the intersection and yielded the road to the emergency vehicle.',
    correctAnswer: false,
    answerText:
      'You must move away from the intersection and pull over to the left side of the road.',
  },
  {
    id: 10,
    questionText:
      'In areas where the traffic sign shown on the right is posted, two-wheeled vehicles may not pass through, whereas mopeds (motorized bicycles) are allowed.',
    correctAnswer: false,
    answerText:
      'This traffic sign indicates that the road is closed to large and medium-size motorcycles and mopeds.',
  },
];

export default testQuestions;
