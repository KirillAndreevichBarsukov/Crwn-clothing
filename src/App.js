import { Route, Routes } from 'react-router-dom';

import Home from './routes/home/home.component';
import NavigationBar from './routes/navigation-bar/navigation-bar.components';
import SignIn from './sign-in/sign-in.component';

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
        <Route path='/sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
