// import Link from 'next/link';

// export default function Header() {
//   return (
//     <div className="flex flex-col items-center ">
//       {/* Navigation Bar */}
//       <nav className="bg-[#1C8DCEED] text-white w-full">
//         <div className="max-w-7xl mx-auto px-4">
//           <div className="flex justify-center h-12 items-center space-x-8">
//             <Link href="/" className="">Printer Offline</Link>
//             <Link href="/" className="">Printer Setup</Link>
//             <Link href="/" className="">Scanner Setup</Link>
//             <Link href="/" className="">Support Home</Link>
//             <Link href="/" className="">Ink Cartridges Issue</Link>
//             <Link href="/" className="">Diagnostics</Link>
//             <Link href="/" className="">Business Support</Link>
//         </div>
//         </div>
//       </nav>
//     <div className="my-4 w-full mt-[3px]"></div>
//     </div>
//   );
// };


import Link from 'next/link';

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      {/* Navigation Bar */}
      <nav className="bg-[#1C8DCEED] text-white w-full">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-center h-20 items-center space-x-10">
            <Link href="/" className="text-lg font-semibold">Printer Offline</Link>
            <Link href="/" className="text-lg font-semibold">Printer Setup</Link>
            <Link href="/" className="text-lg font-semibold">Scanner Setup</Link>
            <Link href="/" className="text-lg font-semibold">Support Home</Link>
            <Link href="/" className="text-lg font-semibold">Ink Cartridges Issue</Link>
            <Link href="/" className="text-lg font-semibold">Diagnostics</Link>
            <Link href="/" className="text-lg font-semibold">Business Support</Link>
          </div>
        </div>
      </nav>
      <div className="my-6 w-full"></div>
    </div>
  );
};
