import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';

function App() {
  return (
    <BrowserRouter>
      <div>
      <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/Catlog" component={Catalog} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
