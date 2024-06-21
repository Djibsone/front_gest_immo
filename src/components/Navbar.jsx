import React, { useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, XMarkIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Navbar = () => {
    let Links = [
        { name: "HOME", link: "/" },
        { name: "BIENS", link: "/properties" },
        { name: "ABOUT", link: "/" },
        { name: "CONTACT", link: "/" },
    ];
    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-50'>
            <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
                {/* Logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>
                    <HomeIcon className='w-7 h-7 text-blue-600' />
                    <span>Agence</span>
                </div>
                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ? <XMarkIcon /> : <Bars3BottomRightIcon />
                    }
                </div>
                {/* Link items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-490px]'}`}>
                    {Links.map((link, index) => (
                        <li className='md:ml-8 md:my-0 my-7 font-semibold' key={index}>
                            <Link to={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</Link>
                        </li>
                    ))}
                    <Link to={'/auth'} className='bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static'>Se connecter</Link>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;