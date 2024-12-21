import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col items-center ">
      {/* Navigation Bar */}
      <nav className="bg-[#1C8DCEED] text-white w-full mt-[-30px] ">
        <div className="max-w-7xl mx-auto px-4">
          {/* <div className="flex justify-center h-12 items-center space-x-8">
            <Link href="offline" className="">Printer Offline</Link>
            <Link href="printer" className="">Printer Setup</Link>
            <Link href="scanner" className="">Scanner Setup</Link>
            <Link href="support" className="">Support Home</Link>
            <Link href="software" className="">Software and Drivers</Link>
            <Link href="diagnostics" className="">Diagnostics</Link>
            <Link href="business" className="">Business Support</Link>



          </div> */}
          <div className="flex justify-center h-12 items-center space-x-8">
            <Link href="/" className="">Printer Offline</Link>
            <Link href="/" className="">Printer Setup</Link>
            <Link href="/" className  ="">Scanner Setup</Link>
            <Link href="/" className="">Support Home</Link>
            <Link href="/" className="">Ink cartridges issue</Link>
            <Link href="/" className="">Diagnostics</Link>
            <Link href="/" className="">Business Support</Link>



          </div>
        </div>
      </nav>
    <div className=" my-4 w-full mt-[3px]"></div>
    </div>
  );
}
