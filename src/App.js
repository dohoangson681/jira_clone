
import './App.css';
import {BrowserRouter , Switch , Route, Router} from 'react-router-dom' ;
import {createBrowserHistory} from 'history' ;
import HomePage from './pages/Home';
import ContactPage from './pages/Contact';
import AboutPage from './pages/About';
import Header from './components/header';
import LoginPage from './pages/Login';
import ProfilePage from './pages/Profile';
import PageNotFound from './pages/404Page';
import PersonalDetails from './pages/Profile/PersonalDetails';
import TodoList from './pages/TodoList';
import { UserTemplate } from './template/UserTemplate';
import { Hometemplate } from './template/HomeTemplate/HomeTemplate';
export const history = createBrowserHistory() ; 
function App() {
  return (
    <div className="App">
      <Router history={history}>
      {/* <Header/> */}
      <Switch>
        <Hometemplate exact path = '/home' component={HomePage} />
        <Hometemplate exact path = '/contact' component={ContactPage} />
        <Hometemplate exact path = '/about' component={AboutPage} />
        <UserTemplate path = '/login' Component={LoginPage} /> 
        <Route exact path = '/profile/:id' component={ProfilePage} />
        <Route exact path = '/profile' component={PersonalDetails} />
        <Route exact path = '/todolist' component={TodoList} />
        <Hometemplate exact path = '/' component={HomePage} />
        <Hometemplate exact path = '*' component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

/**
 * match , history
 */
