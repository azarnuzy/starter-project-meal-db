'use client';

import '../../app/global.css';
import Link from 'next/link';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { usePathname } from 'next/navigation';
export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="flex   flex-col md:flex-wrap md:justify-between md:gap-5 md:mx-10 md:flex-row lg:flex-row mx-6 md:mt-3 mb-4">
      <div className="relative flex items-center">
        <div className="w-20 h-20 m-auto absolute top-0 right-1/2 transform rotate-45 translate-x-1/2 -z-10 -translate-y-[43%] lg:-translate-y-[45%] lg:w-25 lg:h-25 rounded-md  bg-primary"></div>
        <Link
          href="/"
          className="font-bold text-2xl md:mb-0 mt-3 md:mt-0 m-auto"
        >
          DBMeal
        </Link>
      </div>
      <ul className="flex justify-center gap-8 my-4 lg:order-last">
        <Link href="" className={` ${pathname === '/' ? 'active' : undefined}`}>
          <li>Home</li>
        </Link>
        <Link
          href="/meals"
          className={`${pathname === '/meals' ? 'active' : undefined}`}
        >
          <li>Meals</li>
        </Link>
        <Link
          href="/favorites"
          className={`${pathname === '/favorites' ? 'active' : undefined}`}
        >
          <li>Favorites</li>
        </Link>
      </ul>
      <div className=" flex m-auto w-full lg:w-[50%] md:shrink">
        <div className="w-10 h-10 flex justify-center items-center  rounded-y-2xl rounded-l-2xl bg-gray-100 ">
          <label htmlFor="search-input">
            <AiOutlineSearch />
          </label>
        </div>
        <input
          id="search-input"
          type="text"
          className="w-full rounded-y-2xl rounded-r-2xl bg-gray-100 focus:outline-none focus:border-transparent"
          placeholder="Search Meal and more"
        />
      </div>
    </nav>
  );
}
