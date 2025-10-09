import React from 'react';

export function Login() {
  return (
    <main>
        <h1>Welcome to Connect Four!</h1>
        <form method="get" action="play.html">
            <div className="input-group mb-3">
                <span className="icon input-group-text"> @</span>
                <input type="text" className="form-control" placeholder="your@email.com"></input>
            </div>
            <div className="input-group mb-3">
                <span className="icon input-group-text">🔒</span>
                <input type="password" className="form-control" placeholder="Password"></input>
                <br></br>
            </div>
            <div className="align">
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-secondary">Create Account</button>
            </div>
        </form>
        <p>This is my data base place holder. Each person will have their own login credentials store here.</p>
        <hr/>
    </main> 
  );
}
