'use client';

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { meals } from '../../../utils/recipesData';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

function MealDetailModules({ params }: { params: { id: string } }) {
  const router = useRouter();
  const meal = params.id
    ? meals.filter((item) => item.idMeal === params.id)
    : [];

  const ingredients = [];
  const measures: string[] = [];
  let i = 0;
  for (const ingredient in meal[0]) {
    if (ingredient.indexOf(`Ingredient`) > 0) {
      ingredients.push(meal[0][ingredient as keyof (typeof meal)[0]]);
    }

    if (ingredient.indexOf(`Measure`) > 0) {
      measures.push(meal[0][ingredient as keyof (typeof meal)[0]] || '');
    }
  }

  return (
    <div className="max-w-[1440px] mx-auto mt-5">
      <div className="flex justify-between mb-3">
        <div className="ml-3 flex items-center">
          <Link href="/meals" className="text-slate-500 text-sm">
            Meals
          </Link>
          <span className="text-sm text-slate-400"> &nbsp;/&nbsp; </span>
          <span className="text-sm to-slate-800"> {meal[0].strMeal}</span>
        </div>
        <button
          onClick={() => {
            router.back();
          }}
          className="flex items-center font-bold px-3 py-1 rounded-2xl text-[#f3c0b5] border border-solid border-[#f3c0b5] hover:opacity-50"
        >
          <AiOutlineArrowLeft className="mr-1" /> Back
        </button>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5">
        <Image
          width={300}
          height={300}
          src={meal[0].strMealThumb}
          className="max-h-[300px] mx-2 w-screen object-cover rounded-xl shadow-md"
          alt=""
        />
        <div>
          <span className="mt-3 mx-3 font-bold text-lg block ">
            {meal[0].strMeal}
          </span>
          <div className="mt-1 mx-3 border-b-2 border-solid border-slate-200 pb-3">
            <table className="text-left text-md mb-3 mr-0">
              <tbody>
                <tr>
                  <th className="w-[30vw]">Category</th>
                  <td>{meal[0].strCategory}</td>
                </tr>
                <tr>
                  <th className="w-[30vw]">Area</th>
                  <td>{meal[0].strArea}</td>
                </tr>
                <tr>
                  <th className="w-[30vw]">Tags</th>
                  <td>{meal[0].strTags}</td>
                </tr>
              </tbody>
            </table>
            <span className="text-justify text-sm inline-block">
              {meal[0].strInstructions}
            </span>
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold mt-2 mx-3">Ingredients</h3>
      <div className="mt-2 mx-3 border border-solid border-slate-200 shadow-md">
        <ul className="list-ingredients text-sm p-3 list-none">
          {ingredients.map((item) => {
            return (
              <li key={`${item}${i}`}>
                {measures[i++]} {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default MealDetailModules;
