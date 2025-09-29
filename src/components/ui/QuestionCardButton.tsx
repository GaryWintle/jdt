import Image from 'next/image';

import { MouseEventHandler } from 'react';

type QuizCardButtonProps = {
  src: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const QuestionCardButton: React.FC<QuizCardButtonProps> = ({
  src,
  alt,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-gradient-to-b from-neutral-50 to-neutral-200 p-3 m-3 rounded-full shadow-quiz-card-button/20 inset-shadow-xs inset-shadow-primary-600/40"
    >
      <Image className="" src={src} width={28} height={28} alt={alt} />
    </button>
  );
};

export default QuestionCardButton;
