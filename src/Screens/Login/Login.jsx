import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../../API/userService';

export default function Login() {
    const navigate = useNavigate();

    const [error, setError] = useState();
    const [registerdata, setRegisterdata] = useState({
        email: "",
        password: ""
    });

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setRegisterdata((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        userService.login(registerdata).then(res => {
            if (res.responseCode === 401 || res.responseCode === 404) {
                setError(res.message);
            } else {
                localStorage.setItem('userId', res.user._id);
                navigate('/');
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={submitHandler} className="max-w-md w-full bg-white p-8 rounded-lg shadow-md space-y-6">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={registerdata.email}
                        onChange={changeHandler}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Email address</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={registerdata.password}
                        onChange={changeHandler}
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="password" className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:text-blue-600">Password</label>
                </div>

                <button type="submit" className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    Submit
                </button>
            </form>
        </div>
    );
}
