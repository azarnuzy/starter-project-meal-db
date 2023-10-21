import MealsModules from '../../modules/meals';
import { NextPage } from 'next';

const MealsPage: NextPage = () => {
  return (
    <>
      <MealsModules title={'All Meals'} />
    </>
  );
};

export default MealsPage;
