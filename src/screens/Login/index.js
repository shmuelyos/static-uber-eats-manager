import React from 'react';
import {Amplify} from 'aws-amplify';
import {Authenticator} from '@aws-amplify/ui-react';
import awsExports from '../../aws-exports';

Amplify.configure(awsExports);


function Login() {
    return (
        <div>

            <Authenticator>
                {({signOut, user}) => (
                    <main>
                        <h1>Hello {user.username}</h1>
                        <button onClick={signOut}>Sign out</button>
                    </main>
                )}
            </Authenticator>


        </div>
    );
}

export default Login;