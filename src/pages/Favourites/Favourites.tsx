import React from 'react';
import { useSelector } from 'react-redux';
import { FavouritesList } from './components/FavouritesList';
import { favouritesSelector } from './FavouritesSlice';

export const Favourites = () => {
  const favourites = useSelector(favouritesSelector);

  return <FavouritesList favourites={favourites} />;
};
