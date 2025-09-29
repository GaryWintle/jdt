import Image from 'next/image';
import { MouseEventHandler } from 'react';

type FooterButtonProps = {
  src: string;
  alt: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const TestFooterButton: React.FC<FooterButtonProps> = ({
  src,
  alt,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center p-3 w-14 bg-gradient-to-b from-neutral-50 to-neutral-300 hover:bg-neutral-100 rounded-full shadow-button/25 hover:shadow-button-hover/20 cursor-pointer transition-all duration-200 hover:-translate-y-0.5 ease-in"
    >
      <Image src={src} width={20} height={20} alt={alt} priority />
    </button>
  );
};

export default TestFooterButton;
