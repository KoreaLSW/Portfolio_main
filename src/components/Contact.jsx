import React from 'react';
import { AiFillGithub, AiOutlineMail } from 'react-icons/ai';

export default function Contact() {
    return (
        <footer className='w-full bg-slate-100 flex flex-col items-center'>
            <div className='w-full max-w-7xl text-center'>
                <h1 className='mt-16 text-7xl md:text-4xl'>Contact</h1>
                <div className='flex justify-around items-center my-32 md:flex-col md:my-12'>
                    <div className='text-9xl  duration-300 hover:scale-110 md:text-4xl'>
                        <a href='https://github.com/KoreaLSW' target='blank'>
                            <AiFillGithub />
                        </a>
                    </div>
                    <div className='flex flex-col items-center md:mt-10'>
                        <AiOutlineMail className='text-9xl  duration-300 hover:scale-110 md:text-4xl' />
                        <p className='text-2xl md:text-lg'>
                            sangwoo0560@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
