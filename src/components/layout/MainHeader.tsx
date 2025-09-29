import Image from 'next/image';
import Link from 'next/link';

const MainHeader = () => {
  return (
    <header className="pt-safe-plus fixed w-full top-0 pb-4 pt-12 bg-gradient-to-b from-neutral-100 to-neutral-300/60 shadow-module/20 backdrop-blur-md">
      <div className="max-w-[750px] mx-auto px-6 flex items-center justify-between">
        <div className="flex gap-1">
          <Link href="/">
            <Image
              src="/JDT-logo.svg"
              className="w-6"
              width={24}
              height={32}
              alt="JDT Logo"
              priority
            />
          </Link>
          <div className="text-2xl font-bold text-primary-600 font-family tracking-tighter">
            JDT
          </div>
        </div>
        <nav>
          <Image
            src="/icon-menu.svg"
            className="w-6"
            width={32}
            height={32}
            alt="JDT Menu"
            priority
          />
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
