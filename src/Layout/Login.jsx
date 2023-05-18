import React from 'react';
import { Link } from "react-router-dom";
import {useContext} from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';

const Login = () => {
    const {signIN} = useContext(AuthContex)
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);
        signIN(email,password)
        .then(result=> {
            const user = result.user;
            console.log(user)
        })
        .catch(error => console.log(error))
       
    }
    return (
        <div>

        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src='' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-3xl font-bold text-center py-3'>login now</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-warning" type="submit" value="login" />
                            </div>
                        </form>
                        <p>create an account <span className='text-red-500'><Link to={'/signup'}>signUp</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;