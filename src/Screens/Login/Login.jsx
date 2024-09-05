import React, { useState } from 'react';

export default function Login() {
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
        // Handle form submission here
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            {/* Form Section */}
            <div className="flex-1 bg-white p-8 md:p-12 flex items-center justify-center">
                <form onSubmit={submitHandler} className="w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={registerdata.email}
                            onChange={changeHandler}
                            className="w-full p-2 border border-gray-300 rounded"
                            id="email"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={registerdata.password}
                            onChange={changeHandler}
                            className="w-full p-2 border border-gray-300 rounded"
                            id="password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600"
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
    );
}
