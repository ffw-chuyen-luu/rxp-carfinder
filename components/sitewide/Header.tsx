import Image from "next/image";
import Link from "next/link";

import SearchSuggestions from "@/components/ui/SearchSuggestions";
import { auth, signOut } from "@/lib/user/auth";

const Header = async () => {
  const session = await auth();
  const user = session?.user;

  return (
    <header className="bg-white w-full">
      <div className="container m-auto px-4">
        <div className="py-4 text-center lg:flex lg:flex-row lg:justify-between">
          <div className="lg:flex lg:items-center lg:gap-4">
            <Link href="/" className="mr-0 md:mr-36">
              <Image
                src="/images/logo.svg"
                alt="Car finder"
                width="145"
                height="26"
                className="mx-auto lg:mx-0"
              />
            </Link>
            <div className="mt-6 lg:mt-0">
              <SearchSuggestions />
            </div>
          </div>

          <ul className="mt-2 lg:mt-0 font-bold flex items-center justify-end gap-2">
            {user && (
              <>
                <li>
                  <Link href={"/profile"}>Profile</Link>
                </li>
                <li>
                  <form
                    action={async () => {
                      "use server";
                      await signOut();
                    }}
                  >
                    <button>Sign Out</button>
                  </form>
                </li>
              </>
            )}

            {!user && (
              <>
                <li>
                  <Link href={"/login"}>Login</Link>
                </li>
                <li>
                  <Link href={"/signup"}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
