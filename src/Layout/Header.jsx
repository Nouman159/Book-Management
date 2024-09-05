import React from 'react'
import { CiSearch } from "react-icons/ci";
import { Navigate, useNavigate } from 'react-router-dom';


const Header = () => {
    const Navigate = useNavigate()
    return (
        <div>
            <div className=' flex flex-col gap-4 h-full w-full py-10  md:flex-row md:h-[100px]  bg-[#001f3f] items-center justify-between px-10 md:px-10'>
                <div className=' text-lg md:text-xl font-bold text-[#FFFFFF] md:mb-0'> Welcome to Book Store</div>
                <div className=' flex flex-row bg-white border-2 rounded-lg items-center '>
                    <div>    <CiSearch className=' h-5 w-5 md:h-6 md-w-6 ' />        </div>
                    <input
                        type='search'
                        placeholder=' Search Here for books '
                        className=' bg-[#5b88b5] outline-none  text-black px-2 py-1 md:px-3 '
                    />

                </div>
                <div className=' flex flex-row justify-between text-xs md:text-sm text-white w-full md:w-[400px]'>
                    <div className=' hover:text-[#FFFFFF] hover:cursor-pointer hover:font-bold' onClick={() => Navigate('/')}> Home </div>
                    <div className=' hover:text-[#FFFFFF] hover:cursor-pointer hover:font-bold' onClick={() => Navigate('/')}> Sales </div>
                    <div className=' hover:text-[#FFFFFF] hover:cursor-pointer hover:font-bold' onClick={() => Navigate('/')}> Stock </div>
                    <div className=' hover:text-[#FFFFFF] hover:cursor-pointer hover:font-bold' onClick={() => Navigate('/')}>  Orders</div>
                    <div className=' hover:text-[#FFFFFF] hover:cursor-pointer hover:font-bold' onClick={() => Navigate('/')}> Offers</div>
                </div>
            </div>
            {/* <div className= " bg-green-600 w-full sm:bg-red-500 md:bg-blue-500">
                Responsive Text
            </div> */}
        </div>
    )
}

export default Header