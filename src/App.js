import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Catalog from './components/Catalog';
import CatalogFoter from './components/catalogs/CatalogFoter';
import Collections from './components/Collections';
import CollectionOne from './components/CollectionOne';
import CollectionTwo from './components/CollectionTwo';
import CatalogInput from './components/catalogs/CatalogInput';

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Switch>
          <Route exact path="/" component={Navbar} />
          <Route path="/Catlog" component={Catalog} />
        </Switch>
        
        <Switch>
          <Route exact path="/" component={Collections} />
        </Switch>
        

        <Switch>
          <Route exact path="/" component={CollectionOne} />
          <Route path="/mujskoy" component={CollectionTwo} />
        </Switch>
        <CatalogInput />
        <CatalogFoter />
      </div>
    </BrowserRouter>
  );
}

export default App;
