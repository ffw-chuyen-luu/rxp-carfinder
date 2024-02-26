import Image from "next/image";
import Link from "next/link";

import SearchSuggestions from "../ui/SearchSuggestions";

const Header = () => {
  return (
    <header className="bg-white w-full">
      <div className="container m-auto px-4">
        <div className="py-4 text-center md:flex md:flex-row md:justify-between">
          <div className="md:flex md:items-center md:gap-4">
            <Link href="/" className="mr-0 md:mr-36">
              <Image
                src="/images/logo.svg"
                alt="Car finder"
                width="145"
                height="26"
                className="mx-auto md:mx-0"
              />
            </Link>
            <div className="mt-6 md:mt-0">
              <SearchSuggestions />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
