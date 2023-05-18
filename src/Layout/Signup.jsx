import React from 'react';
import { Link } from "react-router-dom";
import {useContext} from 'react';
import { AuthContex } from '../AuthProvider/AuthProvider';

const Signup = () => {
    const {createUser} = useContext(AuthContex)

    const handleSignup = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value
        const password = form.password.value;
        // console.log(name,email,password);
        createUser(email,name, photo,password)
        .then(result => {
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
                    <h1 className='text-3xl font-bold text-center py-3'>signUp</h1>
                    <div className="card-body">
                        <form onSubmit={handleSignup} >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">set Password</span>
                                </label>
                                <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">photo url </span>
                                </label>
                                <input type="text" name='photo' placeholder="url" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">

                                <input className="btn btn-primary" type="submit" value="sign up " />
                            </div>
                        </form>
                        <p>Have an account <span className='text-red-500'><Link to={'/login'}>login</Link></span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Signup;