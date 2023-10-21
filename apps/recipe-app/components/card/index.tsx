import React from 'react';
import Image from 'next/image';
import { TMeal } from '../../types';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';

export default function Card({ meal }: { meal: TMeal }) {
  return (
    <div>
      <div className="drop-shadow-md rounded-3xl border border-solid border-slate-300 max-w-[100vw] mx-2 mb-2 pb-4 ">
        <Link
          className="hover:transform hover:opacity-80 transition duration-100 ease-in-out"
          href={`/meals/${meal.idMeal}`}
        >
          <Image
            height={200}
            width={200}
            className="w-screen h-[200px] object-cover rounded-t-3xl"
            src={
              meal.strMealThumb ||
              'https://www.themealdb.com/images/media/meals/c7lzrl1683208757.jpg'
            }
            alt={meal.strMeal}
          />
        </Link>
        <h3 className="px-3 pt-2 font-semibold text-lg">{meal.strMeal}</h3>
        <div className="px-3 flex justify-between">
          <h4 className=" font-medium text-md">{meal.strCategory || ''}</h4>
          <button>
            <AiOutlineHeart className="text-xl text-red-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
