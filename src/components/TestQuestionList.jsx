import TestQuestion from '@/components/TestQuestion';

const TestQuestionList = ({ testQuestions }) => {
  return (
    <div>
      {testQuestions.map((question, index) => {
        return (
          <TestQuestion
            key={question.id}
            index={index + 1}
            questionText={question.questionText}
          />
        );
      })}
    </div>
  );
};
export default TestQuestionList;
