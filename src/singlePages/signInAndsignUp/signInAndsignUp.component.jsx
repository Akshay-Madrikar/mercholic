import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

import './signInAndsignUp.styles.scss';


const SignInAndSignUpPage = () => (

   <div className="sign-in-sign-up conatiner">
       <div className="row justify-content-between">
            <div className="sign-in-col col-sm-12 col-md-6">
                <SignIn />
            </div>
            <div className="sign-up-col col-sm-12 col-md-6">
                <SignUp />
            </div>
       </div>
   </div>
);

export default SignInAndSignUpPage;