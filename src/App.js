import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import { Provider } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import avatar from './avatar.png';

import { store } from './redux/configureStore';

import Books from './components/books';

import CategoriesPage from './components/categories';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <nav style={{ position: 'fixed', top: '0' }} className="flex">
            <h1 style={{ marginLeft: '2%' }}>Bookstore CMS</h1>
            <div className="links flex">
              <div className="link home_link">
                <Link to="/home">Home</Link>
              </div>
              <div className="link cal_link">
                <Link to="/categories">Categories</Link>
              </div>
            </div>
            <div className="avatar flex"><img src={avatar} alt="avatar" width="30px" /></div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/categories">
              <Categories />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

function Home() {
  return <Books />;
}

function Categories() {
  return <CategoriesPage />;
}

export default App;
