import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: ""
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { email, password } = this.state;
        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: "", password: "" })
        } catch (error) {
            console.error("Unable to authenticate " + error)
        }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="text"
                        value={this.state.email}
                        handleChange={this.handleChange}
                        label='email'
                        required />

                    <FormInput
                        name="password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />

                    <div className='buttons'>
                        <CustomButton type="submit"> Sign In </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle}> Sign In With google </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;
