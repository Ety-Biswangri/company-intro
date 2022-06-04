import React from 'react';
import logo from '../images/wobot-logo.PNG'

const GetStarted = () => {
    return (
        <div className='bg-accent min-h-screen'>
            <div >
                <div className='ml-14 mt-14'>
                    <img src={logo} alt="" />
                </div>
                <div className='flex justify-center items-center ' >
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-lg bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;