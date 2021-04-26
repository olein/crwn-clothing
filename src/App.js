import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

const HatsPage  = () => {
  return(<div>Hats page</div>);
};

function App() {
  return (
    <div>
      {/* <HomePage /> */}      
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/shop/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
