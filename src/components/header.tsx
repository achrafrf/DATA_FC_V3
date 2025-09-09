import React from "react";
import { FaPhone, FaCalendarAlt } from "react-icons/fa";
import Link from "next/link";
import { useUser, UserButton } from "@clerk/nextjs";

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header>
      <div className="w-full bg-teal-600 p-2 flex flex-col items-center md:flex-row md:items-center md:justify-between h-12">
        
        {/* أيقونات السوشيال */}
        <div className="flex flex-wrap justify-center md:justify-start ml-4 mb-4 md:mb-0">
          {/* social icons كما هي */}
        </div>

        {/* معلومات الاتصال + login/profile */}
        <ul className="flex flex-col sm:flex-row items-center text-center font-bold text-sm text-white mr-3 mt-2 md:mt-0">
          <li className="mr-0 sm:mr-4">
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <FaPhone className="h-6 w-6 text-teal-100" />
              </span>
              06 75 34 37 30
            </p>
          </li>
          <li>
            <p className="mb-2 flex items-center justify-center md:justify-start">
              <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                <FaCalendarAlt className="h-6 w-6 text-teal-100" />
              </span>
              Prendre un RDV
            </p>
          </li>

          {/* login أو Clerk UserButton مع صورة مخصصة */}
          <div className="flex items-center gap-2 mt-2 ml-3 mb-2 md:mt-0">
            {!isSignedIn ? (
              <Link href="/login">
                <button className="px-5 py-1 bg-white text-teal-600 font-semibold rounded-full shadow hover:bg-teal-50 hover:shadow-lg transition-all duration-300">
                  Login
                </button>
              </Link>
            ) : (
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    userButtonAvatarBox:
                      "w-10 h-10 rounded-full border-2 border-white shadow-md bg-[url('/pic.png')] bg-cover bg-center",
                  },
                }}
              />
            )}
          </div>
        </ul>
      </div>
    </header>
  );
};

export default Header;
