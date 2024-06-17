import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.components';

const Shop = () => {
  return (
    <div>
      <h1>This is Shop page!</h1>
    </div>
  );
};

const App = () => {
  console.log('render');
  return (
    <Routes>
      <Route path='/' element={<NavigationBar />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
