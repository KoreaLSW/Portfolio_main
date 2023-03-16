import React from 'react';

export default function About() {
    return (
        <section className='bg-gray-200 flex flex-col items-center '>
            <div className='w-full max-w-7xl text-center'>
                <h1 className='mt-16 text-7xl md:text-4xl'>About</h1>
                <div className='flex justify-center items-center py-32 md:flex-col'>
                    <img
                        className='w-96 h-96 object-cover rounded-full shrink-0 md:w-60 md:h-60'
                        src='/img/mainImg.jpg'
                        alt=''
                    />
                    <p className='ml-10 text-3xl text-start md:text-lg md:text-center md:mt-10 md:m-5'>
                        안녕하세요 신입 프론트엔드 개발자 이상우입니다.
                        <br />
                        <br />
                        생산직으로 일을하면서 회의감을 느껴 가볍게 시작해본
                        개발에 흥미를 느껴 프론트엔드 개발자의 꿈을 가지게
                        되었고 코리아IT아카데미 학원과 드림코딩 인터넷강의를
                        보며 HTML / CSS / JAVASCRIPT / REACT를 꾸준히 공부를
                        하였습니다.
                        <br />
                        <br />
                        현재는 TYPESCRIPT를 공부하고 있으며 앞으로 이때까지
                        배웠던 부족한 부분을 채워나가며 어제의 나보다 발전된
                        개발자가 되기위해 노력하겠습니다.
                    </p>
                </div>
            </div>
        </section>
    );
}
