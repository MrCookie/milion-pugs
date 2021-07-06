import { api, RequestMethods } from './api';

import { QueryResponse } from '../pages/ImageViewer/hooks/useFetchImage';

const API_KEY = process.env.REACT_APP_NASA_API_KEY;

export const fetchImage = async (date: string): Promise<QueryResponse> => {
  debugger;
  return await api({
    method: RequestMethods.GET,
    url: `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${date}`,
  });
};
