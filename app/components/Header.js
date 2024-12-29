import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col items-center mt-[30px] ">
      {/* Navigation Bar */}
      <nav className="bg-[#1C8DCEED] text-white w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center h-12 items-center space-x-16 2xl:ml-[-261px] xl:ml-[61px]">
            <Link href="../services/Pages" className="">Printer Offline</Link>
            <Link href="../services/Pages" className="">Printer Setup</Link>
            <Link href="../services/Pages" className="">Scanner Setup</Link>
            <Link href="../services/Pages" className="">Support Home</Link>
            <Link href="../services/Pages" className="">Ink Cartridges Issue</Link>
            <Link href="../services/Pages" className="">Diagnostics</Link>
            <Link href="../services/Pages" className="">Business Support</Link>
        </div>
        </div>
      </nav>
    <div className="my-4 w-full mt-[3px]"></div>
    </div>
  );
};


