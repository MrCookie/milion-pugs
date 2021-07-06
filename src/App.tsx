import { Switch, Route, BrowserRouter } from 'react-router-dom';

import './styles/global.scss';
import { ImageVewer } from './pages/ImageViewer/ImageViewer';
import { Favourites } from './pages/Favourites/Favourites';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ImageVewer} />
        <Route exact path="/zapisane" component={Favourites} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
