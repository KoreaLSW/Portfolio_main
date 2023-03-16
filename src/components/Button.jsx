import React from 'react';

export default function Button({ href, text }) {
    return (
        <a
            className='px-3 py-2 bg-slate-50 rounded-md mr-3 mt-5 text-3xl md:text-xl'
            href={href}
            target='blank'
        >
            {text}
        </a>
    );
}
