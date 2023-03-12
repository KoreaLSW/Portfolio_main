import React, { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';

export default function MenuBar() {
    const [type, setType] = useState(false);
    const [style, setStyle] = useState('md:-top-96');
    const handleClick = () => {
        if (type) {
            setStyle('md:top-full');
            setType(!type);
        } else {
            setStyle('md:-top-96');
            setType(!type);
        }
    };
    return (
        <div>
            <div className='w-32 flex flex-col justify-center items-center py-10 fixed top-1/2 -translate-y-32  left-10 border border-gray-500 text-center rounded-lg md:border-none md:top-0 md:translate-y-0 md:left-0 md:w-full md:bg-white md:rounded-none md:py-3 md:items-start md:h-14'>
                <div className='hidden ml-4 md:block' onClick={handleClick}>
                    <AiOutlineMenu className='text-2xl' />
                </div>
                <ul
                    className={` w-full flex flex-col md:text-center md:duration-300 md:absolute md:-z-10  md:bg-white ${style}`}
                >
                    <li className=' text-3xl  font-light text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-slate-800 md:py-4'>
                        <a href='#about'>About</a>
                    </li>
                    <li className='text-3xl mt-4 font-light text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-slate-800 md:py-4'>
                        <a href='#skills'>Skills</a>
                    </li>
                    <li className='text-3xl mt-4 font-light text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-slate-800 md:py-4'>
                        <a href='#project'>Projects</a>
                    </li>
                    <li className='text-3xl mt-4 font-light text-gray-600 cursor-pointer hover:text-gray-100 hover:bg-slate-800 md:py-4'>
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}
