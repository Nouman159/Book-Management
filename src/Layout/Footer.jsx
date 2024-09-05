import React from 'react'
import { FaPhone } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';

const details = [{ info: "See top Books " }, { info: "What we provide" }, { info: "New Arrivals" }]
const Information = [{ brief: "Why Us" }, { brief: "Best Authors " }, { brief: "Why read with us " }]

const contactInfo = [

    {
        icon: FaPhone,
        label: 'Phone No',
        value: '+92 321 7652542',
    },
    {
        icon: MdEmail,
        label: 'Email',
        value: 'mbm15486@gmail.com'
    },
    {
        icon: FaLocationDot,
        label: 'Location',
        value: ' 123 st Lahore'
    }
]

const Footer = () => {
    return (

        <div>

            <div className=' flex h-full w-full bg-teal-800 flex-col justify-between gap-20 md:flex-row md:h-60 py-10 px-24 md:justify-between'>
                <div className=' flex flex-col justify-between items-center  md:flex-row  gap-20 md:justify-between '>

                    <div className=' flex flex-col text-white ' >
                        {details.map((detail, index) => (
                            <div key={index} className=' hover:text-[#FFFFFF] hover:font-semibold hover:cursor-pointer py-1 '>{detail.info}</div>
                        ))}
                    </div>

                    <div className=' flex flex-col text-white ' >
                        {Information.map((detail, index) => (
                            <div key={index} className=' hover:text-[#FFFFFF] hover:font-semibold hover:cursor-pointer py-1 '>{detail.brief}</div>
                        ))}
                    </div>

                </div>
                <div className=' flex flex-col justify-between items-center  md:flex-row  md:gap-20 md:justify-between '>

                    {contactInfo.map((detail, index) => (
                        <div className=' flex flex-col justify-between items-center text-white  hover:text-[#FFFFFF] hover:font-semibold hover:cursor-pointer  ' >
                            <div className=' flex flex-row items-center gap-5'>
                                <div key={index} className=' py-1 '>
                                    <detail.icon />
                                </div>
                                <div key={index} className='py-1 '>
                                    {detail.label}
                                </div>
                            </div>
                            <div key={index} className='py-1 '>
                                {detail.value}
                            </div>

                        </div>
                    ))}



                </div>

            </div>

        </div>
    )
}

export default Footer