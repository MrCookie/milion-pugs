import { combineReducers } from '@reduxjs/toolkit';
import { favouritesSlice } from '../pages/Favourites/FavouritesSlice';
import { imageViewerSlice } from '../pages/ImageViewer/ImageViewerSlice';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
  imageViewer: imageViewerSlice.reducer,
  favourites: favouritesSlice.reducer,
});
