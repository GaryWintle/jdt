'use client';
import TestQuestionList from '@/components/TestQuestionList.jsx';

import testQuestions from '@/data/testingTestData';

const TestApp = () => {
  return (
    <>
      <TestQuestionList testQuestions={testQuestions} />
    </>
  );
};
export default TestApp;
