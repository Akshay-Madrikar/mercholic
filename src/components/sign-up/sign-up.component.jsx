import React, { useState } from 'react';

import FormInput from '../../components/form-input/form-input.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.util';

import './sign-up.styles.scss';

const SignUp = () => {

    const [userCredentials, setCredentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const { displayName, email, password, confirmPassword } = userCredentials;

    const handleSubmit = async (event) => {

        if( password !== confirmPassword ) {
            alert("Passwords don't match");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword( email, password );

            await createUserProfileDocument( user, { displayName } );

            setCredentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '' 
            })
        } catch( error ) {
            console.log(error.message);
        }
    }

    const handleChange = event => {
        const { name, value } = event.target;

        setCredentials({ ...userCredentials, [name]:value });
    }

        return (
            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>

                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput 
                        type="text"
                        name="displayName"
                        value={displayName}
                        onChange={handleChange}
                        label="Display Name"
                        required
                    />
                    <FormInput 
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label="Email"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        label="Password"
                        required
                    />
                    <FormInput 
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label="Confirm Password"
                        required
                    />

                    <button className="sign-up-btn btn rounded-0" type="submit">SIGN UP</button>
                </form>
            </div>
        );
};

export default SignUp;