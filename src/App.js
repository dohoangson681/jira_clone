
import './App.css';
import {BrowserRouter , Switch , Route} from 'react-router-dom' ;
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
export const history = createBrowserHistory() ; 
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Switch>
        <Route exact path = '/home' component={HomePage} />
        <Route exact path = '/contact' component={ContactPage} />
        <Route exact path = '/about' component={AboutPage} />
        {/* <Route exact path = '/login' component={LoginPage} /> */}
        <UserTemplate path = '/login' Component={LoginPage} /> 
        <Route exact path = '/profile/:id' component={ProfilePage} />
        <Route exact path = '/profile' component={PersonalDetails} />
        <Route exact path = '/todolist' component={TodoList} />
        <Route exact path = '/' component={HomePage} />
        <Route exact path = '*' component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

/**
 * match , history
 */
