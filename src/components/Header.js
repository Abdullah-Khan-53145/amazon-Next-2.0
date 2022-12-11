import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
function Header() {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search Bar */}
        <div className="hidden sm:flex flex-grow cursor-pointer items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
            id=""
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          {/* first user */}
          <div className="link">
            <p>Hello Abdullah Khan</p>
            <p className="font-extrabold md:text-sm">Acount & lists</p>
          </div>
          {/* Second orders */}
          <div className="link">
            <p>Return</p>
            <p className="font-extrabold md:text-sm">& Orders</p>
          </div>
          {/* Third Basket */}
          <div className="relative link items-center flex">
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 rounded-full bg-yellow-400 flex items-center justify-center text-black">
              0
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="font-extrabold md:text-sm hidden md:inline">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div>
        <p>All</p>
      </div>
    </header>
  );
}

export default Header;
