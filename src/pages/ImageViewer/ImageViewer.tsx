import { useDispatch, useSelector } from 'react-redux';
import { Image } from '../../components/Image/Image';
import { Loader } from '../../components/Loader/Loader';
import { useFetchImage } from './hooks/useFetchImage';

import { buildImageDescription } from './utils/buildImageDescription';

import { visitedDatesSelector, addVisitedDate } from './ImageViewerSlice';
import { ControlButtons } from './components/ControlButtons';

import './ImageViewer.scss';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { addFavourite } from '../Favourites/FavouritesSlice';

export const ImageVewer = (): JSX.Element => {
  const dispatch = useDispatch();
  const { imageAlt, imageSrc, isFetching, metadata, refetch } = useFetchImage();

  useEffect(() => {
    if (metadata) {
      dispatch(addVisitedDate(metadata?.date));
    }
  }, [metadata, dispatch]);

  const handleAddFavourite = useCallback(() => {
    if (metadata?.date) {
      dispatch(addFavourite(metadata.url));
    }
  }, [dispatch, metadata]);

  return (
    <main className="mainWrapper">
      {isFetching ? (
        <Loader />
      ) : (
        <>
          <Image
            src={imageSrc as string}
            alt={imageAlt as string}
            description={buildImageDescription(metadata)}
          />
          <ControlButtons
            handleNextButtonClicked={refetch}
            handleSaveButtonClicked={handleAddFavourite}
          />
        </>
      )}
    </main>
  );
};
