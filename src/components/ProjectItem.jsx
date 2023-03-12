import React from 'react';
import Button from './Button';

export default function ProjectItem({ text }) {
    return (
        <div className='flex items-center mt-16 h-full md:flex-col md:text-center md:mx-5'>
            <img
                className='w-96 h-96 object-cover shrink-0 rounded-xl md:w-72 md:h-72'
                src={text.img}
                alt=''
            />
            <div className='ml-10 md:m-0'>
                <p className='text-5xl font-bold md:text-3xl md:mt-5'>
                    {text.title}
                </p>
                <p className='mt-5 whitespace-pre-wrap text-2xl md:text-lg'>
                    {text.skills}
                </p>
                <p className='mt-5 whitespace-pre-wrap text-2xl md:text-lg'>
                    {text.comment}
                </p>
                <div className='flex items-end md:justify-center'>
                    <Button href={text.view} text={'WebView'} />
                    <Button href={text.git} text={'GitHub'} />
                </div>
            </div>
        </div>
    );
}
