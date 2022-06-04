import React from 'react';
import logo from '../images/wobot-logo.PNG';
import icon from '../images/wobot-icon.PNG';

const GetStarted = () => {
    return (
        <div className='bg-accent min-h-screen'>
            <div >
                <div >
                    <img src={logo} alt="" className='md:ml-14 pt-4 lg:pb-0 pb-6' />
                </div>

                <div className='flex justify-center items-center'>
                    <div class="card flex-shrink-0 w-full max-w-xs lg:max-w-lg shadow-lg bg-base-100 sm:mx-10">
                        <div class="card-body lg:px-20 md:pt-6 md:pb-10 sm:px-10">
                            <div className='flex justify-center'>
                                <img src={icon} alt="" className='w-14' />
                            </div>

                            <div className='text-center text-2xl font-semibold font-sans'>
                                <p>It's a delight to have you onboard</p>
                            </div>

                            <div className='text-center text-base leading-4'>
                                <p className='m-0'><small>Help us know you better.</small></p>
                                <p><small>(This is how we optimize Wobot as per your business needs)</small></p>
                            </div>

                            <div class="form-control mt-2">
                                <label class="label">
                                    <span class="label-text">Company Name</span>
                                </label>
                                <input type="text" placeholder="e.g. Example Inc" class="input input-bordered w-full max-w-xs lg:max-w-md h-9" />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Industry</span>
                                </label>
                                <select class="input input-bordered w-full max-w-xs lg:max-w-md h-9" style={{ color: "#A0A0A0" }}>
                                    <option value="" disabled selected>Select</option>
                                    <option value="ABC">ABC</option>
                                    <option value="DEF">DEF</option>
                                </select>
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Company Size</span>
                                </label>
                                <div className='flex justify-around items-center'>
                                    <button class="btn btn-xs lg:px-4 bg-gray-300 border-0 text-black hover:bg-primary hover:text-white">1-20</button>
                                    <button class="btn btn-xs lg:px-4 bg-gray-300 border-0 text-black hover:bg-primary hover:text-white">21-50</button>
                                    <button class="btn btn-xs lg:px-4 bg-gray-300 border-0 text-black hover:bg-primary hover:text-white">51-200</button>
                                    <button class="btn btn-xs lg:px-4 bg-gray-300 border-0 text-black hover:bg-primary hover:text-white">201-500</button>
                                    <button class="btn btn-xs lg:px-4 bg-gray-300 border-0 text-black hover:bg-primary hover:text-white">500+</button>
                                </div>
                            </div>

                            <div class="form-control mt-6 h-9">
                                <button class="btn btn-sm btn-primary text-white text-xs">Get Started</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' mt-24 h-36 flex justify-center items-center'>
                    <small style={{ color: "#545454" }}>Terms of use  |  Privacy policy </small>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;