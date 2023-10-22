import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { TMealResponse } from '../../types';
import { getMealsByFirstLetterRequest } from './request';

export const useGetMealsByFirstLetter = (
  char: string
): UseQueryResult<TMealResponse, Error> => {
  return useQuery({
    queryKey: ['meals', char],
    queryFn: () => getMealsByFirstLetterRequest(char),
  });
};
