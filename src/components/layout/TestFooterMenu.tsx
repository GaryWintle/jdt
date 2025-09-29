import '@/app/globals.css';
import TestFooterButton from '@/components/ui/TestFooterButton';

const TestFooterMenu: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full h-40 bg-gradient-to-t from-primary-600 pointer-events-none pb-safe">
      <div className="flex justify-center gap-4.5 sm:gap-3.5 md:gap-2.5 items-center absolute bottom-0 left-1/2 -translate-x-1/2 mb-4 py-3 px-4.5 rounded-full bg-gradient-to-b from-neutral-100/50 to-neutral-300/75 backdrop-blur-md shadow-module/20 pointer-events-auto mb-safe-plus-4">
        <TestFooterButton src="/icon-timer.svg" alt="Show Test Timer" />
        <TestFooterButton src="/icon-check.svg" alt="Finished Test?" />
        <TestFooterButton src="/icon-search.svg" alt="Show Search Chart" />
      </div>
    </div>
  );
};

export default TestFooterMenu;
