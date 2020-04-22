import React, { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.util';

import './sign-in.styles.scss';

const SignIn = () => {

    const [userCredentials, setCredentials] = useState({ 
        email:'', 
        password:'' 
    });

    const { email, password } = userCredentials;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await auth.signInWithEmailAndPassword( email, password );
            setCredentials({
                email: '',
                password: ''
            })
        } catch ( error ) {
            console.log( error.message );
        }

        setCredentials({ email: '', password: '' });
    }

    const handleChange = event => {
        const { value, name } = event.target;

        setCredentials({ ...userCredentials,[name] : value });
    }

        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span className="title">Sign in with your email and password</span>

                <form onSubmit={handleSubmit}>
                    <FormInput 
                    name="email"
                    type="email" 
                    label="Email" 
                    handleChange={handleChange}
                    value={email} 
                    required/>
                    
                    <FormInput 
                    name="password" 
                    label="Password"
                    type="password" 
                    handleChange={handleChange}
                    value={password} 
                    required/>
                    
                    <div className="buttons mr-1">
                        <button className="sign-in-btn btn rounded-0" type="submit">Sign In</button>
                        <button className="gooleSign-in-btn btn btn-primary rounded-0" type="button" onClick={signInWithGoogle}>Sign In With Google</button>
                    </div>
                    
                </form>
                
            </div>
        );
};


export default SignIn;