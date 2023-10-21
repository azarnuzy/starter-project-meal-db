'use client';

import React, { FC } from 'react';
import Image from 'next/image';

export const Header: FC = () => {
  return (
    <>
      <div className=" rounded-lg bg-primary pt-5 px-7 flex flex-col sm:flex-row justify-center sm:justify-between items-start mt-5 h-[65vh] md:h-[60vh] lg:h-[45vh] -z-[100]  py-8">
        <div className="w-fit flex flex-col items-start justify-center">
          <h1 className="font-semibold text-3xl mt-5">Meal</h1>
          <h2 className="font-semibold text-3xl my-2">Database</h2>
          <h3 className="font-semibold text-xl my-2">
            It&apos;s All About Good Food & Good Taste
          </h3>
          <p className="font-semibold"> Find Recipe on this DBMeal App!</p>
        </div>
        <Image src="/images/restaurant2.png" width={500} height={500} alt="" />
      </div>
    </>
  );
};
