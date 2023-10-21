import MealsModules from '../../modules/meals';
import { NextPage } from 'next';

const MealsPage: NextPage = () => {
  return (
    <>
      <MealsModules title={'My Favorite Meals'} />
    </>
  );
};

export default MealsPage;
