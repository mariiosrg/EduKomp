import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import { signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="w-full fixed bg-white dark:bg-trueGray-900 z-20">
      <nav className="w-full flex flex-wrap justify-between p-8 mx-auto lg:justify-between shadow-lg">
        <Disclosure>
          {({ open }) => (
            <>
              <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                <Link href="/">
                  <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
                    <span>
                      <Image
                        src="/img/logo.svg"
                        alt="E"
                        width="32"
                        height="32"
                        className="w-8"
                      />
                    </span>
                    <span>EduKomp</span>
                  </span>
                </Link>

                <Disclosure.Button
                  aria-label="Toggle Menu"
                  className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
                >
                  <svg
                    className="w-6 h-6 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    {open && (
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                      />
                    )}
                    {!open && (
                      <path
                        fillRule="evenodd"
                        d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                      />
                    )}
                  </svg>
                </Disclosure.Button>

                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden">
                  <>
                    <Link
                      href="/courses"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      Courses
                    </Link>
                    {/* {session?.user && (
                      <Link
                        href="/addcourse"
                        className={`w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none`}
                      >
                        Add Course
                      </Link>
                    )} */}
                    <Link
                      href="/about"
                      className="w-full px-4 py-2 -ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 dark:focus:bg-gray-800 focus:outline-none"
                    >
                      About
                    </Link>
                    {session?.user && (
                      <Link href="/">
                        <button
                          onClick={() => signOut({ callbackUrl: "/login" })}
                          className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
                        >
                          Sign Out
                        </button>
                      </Link>
                    )}

                    {!session?.user && (
                      <Link href="/login">
                        <button className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                          Get Started
                        </button>
                      </Link>
                    )}
                  </>
                </Disclosure.Panel>
              </div>
            </>
          )}
        </Disclosure>

        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            <li className="mr-3 nav__item">
              <Link
                href="/courses"
                className="inline-block px-4 py-2 text-lg font-semibold text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                Courses
              </Link>

              {/* {
                !session?.user.email ? null : (
                  <Link
                    href="/addcourse"
                    className="inline-block px-4 py-2 text-lg font-semibold text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
                  >
                    Add Course
                  </Link>
                )
              } */}

              <Link
                href="/about"
                className="inline-block px-4 py-2 text-lg font-semibold text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800"
              >
                About
              </Link>
            </li>
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          {session?.user && (
            <Link href="/">
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className=" px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5"
              >
                Sign Out
              </button>
            </Link>
          )}

          {!session?.user && (
            <Link href="/login">
              <button className=" px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                Get Started
              </button>
            </Link>
          )}

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
};

