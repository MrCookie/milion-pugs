import { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useSelector } from 'react-redux';
import { fetchImage } from '../../../utils/fetchImage';
import { visitedDatesSelector } from '../ImageViewerSlice';
import { getRandomDate } from '../utils/getRandomDate';

export type QueryResponse = {
  url: string;
  explanation: string;
  title: string;
  date: string;
  copyright: string;
};

export const useFetchImage = () => {
  const visitedDates = useSelector(visitedDatesSelector);
  const { status, data, error, isFetching, refetch } = useQuery<QueryResponse>(
    ['image'],
    () => {
      const date = getRandomDate(visitedDates);
      return fetchImage(date);
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  useEffect(() => {
    // Handle error, should be in different global hook
  }, [error]);

  const imageSrc = data?.url;
  const imageAlt = data ? `${data.title}: ${data.explanation}` : null;

  return {
    isFetching,
    imageSrc,
    imageAlt,
    status,
    metadata: data,
    refetch,
  };
};
