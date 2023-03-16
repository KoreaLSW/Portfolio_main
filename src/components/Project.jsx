import React, { useState } from 'react';
import Button from './Button';
import ProjectItem from './ProjectItem';

export default function Project() {
    const [text, setText] = useState([
        {
            img: '/img/youtube.gif',
            title: 'YouTube',
            skills: '· HTML\n· CSS\n· JavaScript\n· React',
            comment:
                'YouTubeAPI를 사용하여 YouTube페이지를 만들어 보았습니다.\n리액트를 사용하여 만들어보았고 Axios를 통해 데이터동신을 해보고 Tailwindcss로 스타일링을 해보았습니다.',
            view: 'https://bucolic-starlight-e9c325.netlify.app/',
            git: 'https://github.com/KoreaLSW/Youtube_Project',
        },
        {
            img: '/img/weather.gif',
            title: '날씨 알리미',
            skills: '· HTML\n· CSS\n· JavaScript\n· React',
            comment:
                'KakaoMapAPI와 OpenWearherAPI를 사용하여 날씨를 알려주는 웹페이지를 만들어 보았습니다\n온도에 따라 옷추천해주는 기능과 KaKaoMapAPI를 이용하여 맵의 위치를 클릭하면 해당 위치의 온도를 알려주는 기능을 만들었습니다.',
            view: 'https://friendly-torrone-28699c.netlify.app/',
            git: 'https://github.com/KoreaLSW/Portfolio_Weather',
        },
        {
            img: '/img/project_02.png',
            title: '오설록',
            skills: '· HTML\n· CSS\n· JavaScript',
            comment:
                '실제 오설록 반응형 홈페이지를 똑같이 만들어보았습니다.\n반응형 웹페이지를 이해하는데 많은 도움이 되었고 JavaScritp를 통해 애니메이션을 관리해보며 JavaScript에 많이 익숙해졌습니다.',
            view: 'https://korealsw.github.io/Portfolio_Osulloc/',
            git: 'https://github.com/KoreaLSW/Portfolio_Osulloc',
        },
    ]);
    return (
        <section className='w-full bg-slate-300 flex flex-col items-center'>
            <div className='w-full max-w-7xl '>
                <h1 className='mt-16 text-7xl shrink-0 text-center'>
                    Projects
                </h1>
                <div className='flex flex-col justify-center items-center py-28 m-auto'>
                    {text && text.map((value) => <ProjectItem text={value} />)}
                </div>
            </div>
        </section>
    );
}
