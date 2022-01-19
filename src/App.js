// import logo from './logo.svg';
import {Route, Switch} from 'wouter'
import './App.css';

import HomePg from './pages/home';
import Pomu2022 from './pages/2022/pomu2022';
import Elira2022 from './pages/2022/elira2022';
import Finana2022 from './pages/2022/finana2022';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/2022/pomu'><Pomu2022 /></Route>
        <Route path='/2022/elira'><Elira2022 /></Route>
        <Route path='/2022/finana'><Finana2022 /></Route>
        <Route path='/'><HomePg /></Route>
      </Switch>
    </div>
  );
}

export default App;
