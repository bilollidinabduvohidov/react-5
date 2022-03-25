import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import CatalogFoter from './components/catalogs/CatalogFoter';
import Collections from './components/Collections';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/Catlog" component={Catalog} />
        </Switch>

        <Switch>
          <Collections />
        </Switch>

        <CatalogFoter />
      </div>
    </BrowserRouter>
  );
}

export default App;
