'use client';
import { useState } from 'react';
import QuestionCard from '@/components/ui/QuestionCard';
import testQuestions from '@/data/testingTestData';

const QuestionContainer = () => {
  const [answers, setAnswers] = useState({});

  return (
    <div className="mb-30 mt-10">
      {testQuestions.map((question, index) => {
        return (
          <QuestionCard
            key={question.id}
            questionText={question.questionText}
            index={index + 1}
            totalQuestions={testQuestions.length}
          />
        );
      })}
    </div>
  );
};

export default QuestionContainer;
