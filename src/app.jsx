import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { About } from './about/about.jsx';
import { Login } from './login/login.jsx';
import { Play } from './play/play.jsx';
import { AuthState } from './login/authState.js';

function App() {
  const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
  const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
  const [authState, setAuthState] = React.useState(currentAuthState);

  return (
    <BrowserRouter>
        <div className="body bg-primary-subtle text-primary" data-bs-theme="dark">
            <header className="bg-body-secondary container-fluid">
                <h1>Connect Four</h1>
                <nav className="navbar-dark">
                    
                    <menu>
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink className="nav-link" to="/play">Play</NavLink></li>)}
                        {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink className="nav-link" to="/about">About</NavLink></li>)}
                    </menu>
                </nav>
            </header>

        <Routes>
          <Route
            path='/'
            element={
              <Login
                userName={userName}
                authState={authState}
                onAuthChange={(userName, authState) => {
                  setAuthState(authState);
                  setUserName(userName);
                }}
              />
            }
            exact
          />
            <Route path="/play" element={<Play />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
        </Routes>

            <footer className="bg-body-secondary">
                <div className="container-fluid">
                    <span className="text-reset">Elijah Buckwalter</span>
                    <a className="text-reset" href="https://github.com/METALMONSTER12/startup">GitHub</a>
                </div>   
            </footer>

        </div>
    </BrowserRouter>
);
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}

export default App;