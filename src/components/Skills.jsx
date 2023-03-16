import React from 'react';
import { AiFillHtml5, AiFillGithub } from 'react-icons/ai';
import { DiCss3, DiReact, DiJava } from 'react-icons/di';
import { SiJavascript } from 'react-icons/si';

const STYLE_LI = 'flex flex-col items-center md:mr-10 md:mt-5';
const STYLE_ICON =
    'text-9xl text-cyan-600 duration-300 hover:scale-110 hover:rotate-12 md:text-7xl';
const STYLE_P = 'text-3xl mt-5 md:mt-3 md:text-xl';
export default function Skills() {
    return (
        <section className='w-full bg-slate-100 flex flex-col items-center'>
            <div className='w-full max-w-7xl text-center'>
                <h1 className='mt-16 text-7xl shrink-0 md:text-4xl'>Skills</h1>
                <ul className='w-full flex justify-around items-center m-auto my-32 md:flex-wrap'>
                    <li className={STYLE_LI}>
                        <AiFillHtml5 className={STYLE_ICON} />
                        <p className={STYLE_P}>HTML</p>
                    </li>
                    <li className={STYLE_LI}>
                        <DiCss3 className={STYLE_ICON} />
                        <p className={STYLE_P}>CSS</p>
                    </li>
                    <li className={STYLE_LI}>
                        <SiJavascript className={STYLE_ICON} />
                        <p className={STYLE_P}>JS</p>
                    </li>
                    <li className={STYLE_LI}>
                        <DiReact className={STYLE_ICON} />
                        <p className={STYLE_P}>React</p>
                    </li>
                    <li className={STYLE_LI}>
                        <AiFillGithub className={STYLE_ICON} />
                        <p className={STYLE_P}>Git</p>
                    </li>
                    <li className={STYLE_LI}>
                        <DiJava className={STYLE_ICON} />
                        <p className={STYLE_P}>Java</p>
                    </li>
                </ul>
            </div>
        </section>
    );
}
