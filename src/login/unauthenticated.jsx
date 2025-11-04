import React from 'react';

import Button from 'react-bootstrap/Button';
import { MessageDialog } from './messageDialog';

export function Unauthenticated(props) {
    const [userName, setUserName] = React.useState(props.userName);
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    async function loginUser() {
        loginorcreate(`/api/auth/login`); 
    }
    
    async function createUser() {
        loginorcreate(`/api/auth/create`);
    }

    async function loginorcreate(endpoint) {
        const response = await fetch(endpoint, {
        method: 'post',
        body: JSON.stringify({ email: userName, password: password }),
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
    });
    if (response?.status === 200) {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
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