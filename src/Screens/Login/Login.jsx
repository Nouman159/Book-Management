import React, { useState } from 'react';
import userService from '../../API/userService';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate()

    const [error, setError] = useState();
    const [registerdata, setregisterdata] = useState({
        email: "",
        password: "",
    });

    const changeHandler = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setregisterdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        userService.login(registerdata).then(res => {
            // navigate('/')
            console.log(res)
            if (res.responseCode === 401 || res.responseCode === 404) {
                setError(res.message)
            } else {
                localStorage.setItem('userId', res.user._id)
                navigate('/')
            }
        }
        )
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="container mx-auto flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden">
                {/* Form Section */}
                <div className="flex-1 bg-white p-8 md:p-12 flex items-center justify-center">
                    <form onSubmit={submitHandler} className="w-full max-w-md space-y-6">
                        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2 text-sm md:text-base">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={registerdata.email}
                                onChange={changeHandler}
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 mb-2 text-sm md:text-base">Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={registerdata.password}
                                onChange={changeHandler}
                                className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                id="password"
                                required
                                placeholder="Enter your password"
                            />
                        </div>
                        {
                            error ? <div className='text-red-500'>{error}</div> : ""
                        }
                        <button
                            type="submit"
                            className="w-full py-3 px-6 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>

                {/* Image Section */}
                <div
                    className="hidden md:flex md:w-1/2 bg-cover bg-center"
                    style={{ backgroundImage: 'url(/Images/1_0VjiKLv-4xxJLikMrmKT1w.jpg)' }}
                >
                    {/* The image will be set as the background */}
                </div>
            </div>
        </div>
    );
}
