import Link from 'next/link';
import { TMeal } from '../../types';
import React from 'react';
import Image from 'next/image';

export default function Card({ meal }: { meal: any }) {
  return (
    <div>
      <div className="drop-shadow-md rounded-3xl border border-solid border-slate-300 max-w-[100vw] mx-2 mb-2 pb-4 hover:transform hover:opacity-80 transition duration-100 ease-in-out">
        <Image
          height={200}
          width={200}
          className="w-screen h-[200px] object-cover rounded-t-3xl"
          src={meal.strMealThumb}
          alt={meal.strMeal}
        />
        <h3 className="px-3 pt-2 font-semibold text-lg">{meal.strMeal}</h3>
        <h4 className="px-3 font-medium text-md">{meal.strCategory || ''}</h4>
      </div>
    </div>
  );
}
