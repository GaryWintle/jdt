import QuestionCardButton from './QuestionCardButton';

const QuestionCard = ({ questionText, index, totalQuestions }) => {
  return (
    <div className="flex flex-col gap-5 bg-gradient-to-b from-neutral-50 to-neutral-200 px-7 py-8 rounded-4xl my-5 shadow-quiz-card/10 w-[calc(100%-2.5rem)] md:w-3/4 lg:w-1/2 max-w-[700px] mx-auto">
      <h3 className="font-family tracking-wide text-center text-neutral-500">
        Question {index} of {totalQuestions}
      </h3>
      <p className="font-family text-xl text-primary-600 font-medium text-center max-w-[65ch] mx-auto">
        {questionText}
      </p>
      <div className="flex gap-5 justify-center bg-gradient-to-b from-neutral-200 to-neutral-100 rounded-full w-fit mx-auto py-0.5 px-2">
        <QuestionCardButton src="/icon-true.svg" alt="choose true" />
        <QuestionCardButton src="/icon-false.svg" alt="choose false" />
      </div>
    </div>
  );
};

export default QuestionCard;
