import { meals } from '../../utils/recipesData';
import PageTitle from '../../components/page-title';
import React from 'react';
import Card from '../../components/card';

function MealsModules() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <PageTitle title="All Meals" />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 justify-center">
        {meals.map((meal) => {
          return <Card key={meal.idMeal} meal={meal} />;
        })}
      </div>
    </div>
  );
}

export default MealsModules;
