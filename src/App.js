import { Route, Switch } from 'react-router-dom';
import Login from './components/authentication/login';
import Signup from './components/authentication/signup';
import Logout from './components/authentication/logout';
import Unprotected from './components/authentication/unprotected';
import Prote from './components/protected';
import Navbar from './components/Navbar';
import Highscore from './components/scoring/Highscore';
import Individualscore from './components/scoring/Individualscore';
import Challenge1 from './components/challenges/challenge1';
import Challenges from './components/challenges/challenges';
import Register from './components/scoring/Register';
import { AppContext } from './context';
import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [ isAuth, setIsAuth ] = useState(false);
  const [ score, setScore ] = useState();

  useEffect(() => {
    if(localStorage.getItem('access_token')) {
      setIsAuth(true);
      setScore(<Individualscore/>)
    }
  }, [])

  return (
    <AppContext.Provider value={{  }}>
      <div className="App">
        <Navbar setIsAuth={setIsAuth} isAuth={isAuth} score={score} setScore={setScore}/>
        <Switch>
          <Route exact path={'/'} component={Unprotected} />
          <Route exact path={'/unprotected'} component={Unprotected} />
          <Route exact path='/login' render={(props) => (<Login {...props} setIsAuth={setIsAuth} isAuth={isAuth} score={score} setScore={setScore} /> )} />
          <Route exact path={"/signup/"} component={Signup}/>
          <Route exact path='/logout' render={(props) => (<Logout {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
          <Route exact path="/protected" render={(props) => (<Prote {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
          <Route exact path="/challenges" render={(props) => (<Challenges {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
          <Route exact path="/challenge1" render={(props) => (<Challenge1 {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
          <Route exact path="/register" render={(props) => (<Register {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
          <Route exact path="/highscore" render={(props) => (<Highscore {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
          <Route exact path="/ind_score" render={(props) => (<Individualscore {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
