import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { Favourites } from '../Favourites';

const mockStore = configureStore([]);

const mockedState = {
  favourites: {
    favouritesUrls: [
      'https://apod.nasa.gov/apod/image/0201/m16w1_eso.jpg)',
      'https://apod.nasa.gov/apod/image/1805/meteorsbryce_lane_960.jpg',
    ],
  },
};

const store = mockStore(mockedState);

describe('Favourites', () => {
  test('Correctly renders list of favouites', () => {
    const wrapper = render(
      <Provider store={store}>
        <Favourites />
      </Provider>,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
