import { Route, Switch } from 'react-router-dom';
import Login from './components/authentication/login';
import Signup from './components/authentication/signup';
import { ind_score } from "./api/scoring/scoringAPI";
import Logout from './components/authentication/logout';
import Unprotected from './components/authentication/unprotected';
import Prote from './components/protected';
import BootstrapNavbar from './components/Navbar';
import Highscore from './components/scoring/Highscore';
import Challenge1 from './components/challenges/challenge1';
import Challenge2 from './components/challenges/challenge2';
import Challenges from './components/challenges/challenges';
import { AppContext } from './context';
import { useEffect, useState } from 'react';

import './App.css';

function App() {

  const [ isAuth, setIsAuth ] = useState(false);
  const [ score, setScore ] = useState();

  const scoreUpdate = () => {
        ind_score().then( async (response) => {
            const body = await response.json()
            setScore(body)
        })
    }

  useEffect(() => {
    if(localStorage.getItem('access_token')) {
      setIsAuth(true);
      scoreUpdate();
    }
  }, [])

  

  return (
    <AppContext.Provider value={{ score }}>
      <div className="App">
        <BootstrapNavbar setIsAuth={setIsAuth} isAuth={isAuth} score={score} setScore={setScore}/>
        <Switch>
          <Route exact path='/' render={(props) => (<Unprotected/>)} />
          <Route exact path={'/unprotected'} component={Unprotected} /> 
          <Route exact path='/login' render={(props) => (<Login {...props} setIsAuth={setIsAuth} isAuth={isAuth} setScore={setScore} /> )} />
          <Route exact path={"/signup/"} component={Signup}/>
          <Route exact path='/logout' render={(props) => (<Logout {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
          <Route exact path="/protected" render={(props) => (<Prote {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
          <Route exact path="/challenges" render={(props) => (<Challenges {...props} setIsAuth={setIsAuth} isAuth={isAuth} scoreUpdate={scoreUpdate}/> )} />
          <Route exact path="/challenge1" render={(props) => (<Challenge1 {...props} setIsAuth={setIsAuth} isAuth={isAuth} scoreUpdate={scoreUpdate}/> )} />
          <Route exact path="/challenge2" render={(props) => (<Challenge2 {...props} setIsAuth={setIsAuth} isAuth={isAuth} scoreUpdate={scoreUpdate}/> )} />
          <Route exact path="/highscore" render={(props) => (<Highscore {...props} setIsAuth={setIsAuth} isAuth={isAuth} /> )} />
        </Switch>
      </div>
    </AppContext.Provider>
  );
}

export default App;
