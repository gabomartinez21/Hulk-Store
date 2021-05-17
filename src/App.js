import styled from 'styled-components';
import {BrowserRouter as Router,
  Switch,
  Route
  } from 'react-router-dom';
  import { BiCart } from 'react-icons/bi';
import Store from './components/store';
import Carrito from './components/carrito';

function App() {
  return (
    <Router>
      <HeaderStore>
        <div className="logo">
          <a href="/">
          <h2>HulkStore</h2>

          </a>
        </div>
        <div className="carrito">
          <a href="/carrito">
            <BiCart/>
          </a>
        </div>
      </HeaderStore>

      <Switch>
        <Route path="/" exact>
          <Store />
        </Route>
        <Route path="/carrito" exact>
          <Carrito />
        </Route>
      </Switch>

    </Router>
  );
}

export default App;


const HeaderStore = styled.div`
  background:#3e3e3e;
  color:#fff;
  display:flex;
  padding: 5px 10px;
  justify-content:space-between;
  align-items:center;

  > .logo a {
    color:#fff;
    text-decoration:none;
  }
  > .carrito a{
    font-size:30px;
    color:#fff;
    margin-right:25px;
  }
`