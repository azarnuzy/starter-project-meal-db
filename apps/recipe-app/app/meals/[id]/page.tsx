import MealDetailModules from '../../../modules/meals/detail';
import { ReactElement } from 'react';

const MealDetailPage = ({
  params,
}: {
  params: { id: string };
}): ReactElement => {
  return (
    <>
      <MealDetailModules params={params} />
    </>
  );
};

export default MealDetailPage;
