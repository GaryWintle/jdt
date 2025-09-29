import QuestionCardButton from './QuestionCardButton';

const QuestionCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-gradient-to-b from-neutral-50 to-neutral-200 px-5 py-6 rounded-4xl mx-5 my-5 shadow-quiz-card/10">
      <h3 className="font-family tracking-wide text-center text-neutral-500">
        Question 1 of 50
      </h3>
      <p className="font-family text-xl text-primary-600 font-medium text-center">
        Two-wheeled vehicles have high maneuverability, but you must not squeeze
        between other vehicles.
      </p>
      <div className="flex gap-5 justify-center bg-gradient-to-b from-neutral-200 to-neutral-100 rounded-full w-fit mx-auto py-0.5 px-2">
        <QuestionCardButton src="/icon-true.svg" alt="choose true" />
        <QuestionCardButton src="/icon-false.svg" alt="choose false" />
      </div>
    </div>
  );
};

export default QuestionCard;
