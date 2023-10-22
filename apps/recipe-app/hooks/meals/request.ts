import axios, { AxiosRequestConfig } from 'axios';
import { TMealResponse } from '../../types';

const apiConfig: AxiosRequestConfig = {
  baseURL: 'https://www.themealdb.com/api/json/',
};

const api = axios.create(apiConfig);

export const getMealsByFirstLetterRequest = async (
  char: string
): Promise<TMealResponse> => {
  const { data } = await api.get(`/v1/1/search.php?f=${char}`);

  return data;
};
