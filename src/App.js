import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Catalog from './components/Catalog';
import CatalogFoter from './components/catalogs/CatalogFoter.jsx';
import Collections from './components/Collections.jsx';
import CollectionOne from './components/CollectionOne.jsx';
import CollectionTwo from './components/CollectionTwo.jsx';
import CatalogInput from './components/catalogs/CatalogInput.jsx';


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
