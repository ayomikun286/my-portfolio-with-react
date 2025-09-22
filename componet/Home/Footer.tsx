import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Footer = () => {
    return (
        <div className='flex  justify-between items-center px-5 md:px-10 py-5 border-t-1 mt-30' >
            <div className="">
                <h1 className="logo text-[#ff4500] text-3xl font-bold hover:scale-110 ease transition ease-in-out duration-500 ">
                    Port< span className="text-xl mx-1">folio</span>
                </h1>
            </div>

            <a href="https://github.com/ayomikun286" target="_blank">
                <FontAwesomeIcon
                    icon={faGithub}
                    className=" text-5xl  shadow-2xl  rounded-full hover:text-[#ff4500] cursor-pointer transition ease-in-out duration-500 hover:scale-110 "
                />
            </a>
        </div>
    )
}

export default Footer