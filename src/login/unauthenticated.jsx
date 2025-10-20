import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onlogin(userName);
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onlogin(userName);
    }

    return (
        <>
            <div>
                <div className="input-group mb-3">
                <span className="icon input-group-text"> @</span>
                <input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="your@email.com"></input>
            </div>
            <div className="input-group mb-3">
                <span className="icon input-group-text">🔒</span>
                <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Password"></input>
            </div>
            <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>
              Login
            </Button>
            <Button variant='secondary' onClick={() => createUser()} disabled={!userName || !password}>
              Create
            </Button>
            </div>

            <MessageDialog message={displayError} onHide={() => setDisplayError(null)} />
        </>
    )
}