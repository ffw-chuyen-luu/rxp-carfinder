import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="py-8 md:py-16 border-b border-gray-300 md:flex md:items-start md:justify-between">
          <div className="w-80 mb-6">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Car finder"
                width="145"
                height="26"
              />
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>

          <div className="w-96 mb-6">
            <h2 className="text-xl font-semibold mb-2">About</h2>
            <ul className="text-gray-400">
              <li className="mb-3">
                <Link href="/">How it works?</Link>
              </li>
              <li className="mb-3">
                <Link href="/">Created By</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="text-sm md:flex md:items-center md:flex-row-reverse md:justify-between">
          <ul className="mb-6 md:mb-0">
            <li className="inline-block mr-4">
              <Link href="/">Privacy & Policy</Link>
            </li>
            <li className="inline-block mr-4">
              <Link href="/">Terms & Condition</Link>
            </li>
          </ul>
          <p>©2024 CarFinder. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
