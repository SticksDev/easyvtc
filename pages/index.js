import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div>
            <title>EasyVTC Home</title>
            <meta charSet='utf-8' />
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, shrink-to-fit=no'
            />
            <meta name='description' content />
            <meta name='author' content />
            <link rel='stylesheet' href='css/tailwind/tailwind.min.css' />
            <link rel='stylesheet' href='css/site/main.css' />
            <link rel='script' href='js/site/main.js' />
            <script src='https://unpkg.com/typewriter-effect@latest/dist/core.js'></script>
            <script src='js/type.js'></script>
            <link
                rel='icon'
                type='image/png'
                sizes='16x16'
                href='img/EasyVTC-OnlyLogo.png'
            />
            <div className>
                <section className='bg-indigo-500 pb-8'>
                    <div className='container px-4 mx-auto'>
                        <nav className='relative flex justify-between items-center py-8'>
                            <a
                                className='text-gray-600 text-2xl leading-none'
                                href='#'
                            >
                                <img
                                    className='h-8'
                                    src='img/EasyVTC-WordMark.png'
                                    alt=''
                                    width='auto'
                                />
                            </a>
                            <div className='lg:hidden'>
                                <button className='block navbar-burger text-indigo-50 hover:text-indigo-200 focus:outline-none'>
                                    <svg
                                        className='h-4 w-4'
                                        fill='currentColor '
                                        viewBox='0 0 20 20'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <title>Mobile menu</title>
                                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                                    </svg>
                                </button>
                            </div>
                            <ul className='hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex ml-auto mr-auto items-center w-auto space-x-12'>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                            <ul className='hidden lg:flex items-center w-auto space-x-8'>
                                <li>
                                    <a
                                        className='text-sm text-indigo-50 hover:text-indigo-200 font-medium'
                                        href='#'
                                    >
                                        Sign in
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className='inline-block px-5 py-3 text-sm text-center bg-white hover:bg-indigo-50 text-indigo-500 font-semibold border border-white hover:border-indigo-50 rounded transition duration-200'
                                        href='/signup'
                                    >
                                        Sign up for Waitlist
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div className='max-w-xl lg:max-w-4xl mx-auto text-center mt-16 mb-24'>
                            <span className='text-xs font-semibold text-indigo-50 uppercase'>
                                Develop your Company
                            </span>
                            <h2
                                className='mb-8 mt-2 text-white text-3xl leading-tight md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight font-bold font-heading'
                                id='title'
                            >
                                The Future Of VTC Management
                            </h2>
                            <a
                                className='block md:inline-block px-5 py-3 text-sm text-center bg-white hover:bg-indigo-50 text-indigo-500 font-semibold border border-white hover:border-indigo-50 rounded transition duration-200'
                                href='/signup'
                            >
                                Signup For Waitlist Now
                            </a>
                        </div>
                        <div className='flex flex-wrap -mx-4'>
                            <div className='w-full sm:w-1/2 lg:w-1/3 flex px-4 mb-8'>
                                <div className='mr-6'>
                                    <svg
                                        className='text-white w-12 h-12'
                                        viewBox='0 0 48 48'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z'
                                            fill='#F1F5FB'
                                        />
                                        <circle
                                            cx={24}
                                            cy={24}
                                            r='23.5'
                                            stroke='#E1E4E8'
                                        />
                                    </svg>
                                </div>
                                <div className='w-2/3 mb-4'>
                                    <h3 className='mb-2 text-xl lg:text-2xl text-white font-bold font-heading'>
                                        Bulit With Truckers In Mind
                                    </h3>
                                    <p className='text-lg text-indigo-50'>
                                        Easy UI, Ease of use all proivded.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full sm:w-1/2 lg:w-1/3 flex px-4 mb-8'>
                                <div className='mr-6'>
                                    <svg
                                        className='text-white w-12 h-12'
                                        viewBox='0 0 48 48'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z'
                                            fill='#F1F5FB'
                                        />
                                        <circle
                                            cx={24}
                                            cy={24}
                                            r='23.5'
                                            stroke='#E1E4E8'
                                        />
                                    </svg>
                                </div>
                                <div className='w-2/3 mb-4'>
                                    <h3 className='mb-2 text-xl lg:text-2xl text-white font-bold font-heading'>
                                        Powerful.
                                    </h3>
                                    <p className='text-lg text-indigo-50'>
                                        Highly customizable feature set.
                                    </p>
                                </div>
                            </div>
                            <div className='w-full lg:w-1/3 flex px-4 mb-8'>
                                <div className='mr-6'>
                                    <svg
                                        className='text-white w-12 h-12'
                                        viewBox='0 0 48 48'
                                        fill='none'
                                        xmlns='http://www.w3.org/2000/svg'
                                    >
                                        <path
                                            d='M25.6 22.9C25.7 23 25.8 23 26 23H33C33.6 23 34 22.6 34 22C34 21.8 34 21.7 33.9 21.6L30.4 14.6C30.1 14.1 29.5 13.9 29 14.2C28.9 14.3 28.7 14.4 28.6 14.6L25.1 21.6C24.9 22 25.1 22.6 25.6 22.9ZM29.5 17.2L31.4 21H27.6L29.5 17.2ZM18.5 14C16 14 14 16 14 18.5C14 21 16 23 18.5 23C21 23 23 21 23 18.5C23 16 21 14 18.5 14ZM18.5 21C17.1 21 16 19.9 16 18.5C16 17.1 17.1 16 18.5 16C19.9 16 21 17.1 21 18.5C21 19.9 19.9 21 18.5 21ZM22.7 25.3C22.3 24.9 21.7 24.9 21.3 25.3L18.5 28.1L15.7 25.3C15.3 24.9 14.7 24.9 14.3 25.3C13.9 25.7 13.9 26.3 14.3 26.7L17.1 29.5L14.3 32.3C13.9 32.7 13.9 33.3 14.3 33.7C14.7 34.1 15.3 34.1 15.7 33.7L18.5 30.9L21.3 33.7C21.7 34.1 22.3 34.1 22.7 33.7C23.1 33.3 23.1 32.7 22.7 32.3L19.9 29.5L22.7 26.7C23.1 26.3 23.1 25.7 22.7 25.3ZM33 25H26C25.4 25 25 25.4 25 26V33C25 33.6 25.4 34 26 34H33C33.6 34 34 33.6 34 33V26C34 25.4 33.6 25 33 25ZM32 32H27V27H32V32Z'
                                            fill='#F1F5FB'
                                        />
                                        <circle
                                            cx={24}
                                            cy={24}
                                            r='23.5'
                                            stroke='#E1E4E8'
                                        />
                                    </svg>
                                </div>
                                <div className='w-2/3 mb-4'>
                                    <h3 className='mb-2 text-xl lg:text-2xl text-white font-bold font-heading'>
                                        Free
                                    </h3>
                                    <p className='text-lg text-indigo-50'>
                                        We don't charge for the essentials. We
                                        get that money is hard sometimes.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50'>
                        <div className='navbar-backdrop fixed inset-0 bg-gray-800 opacity-25' />
                        <nav className='relative flex flex-col py-6 px-6 w-full h-full bg-white border-r overflow-y-auto'>
                            <div className='flex items-center mb-12'>
                                <a
                                    className='mr-auto text-2xl font-semibold leading-none'
                                    href='#'
                                >
                                    <img
                                        className='h-8'
                                        src='plain-assets/logos/plain-indigo.svg'
                                        alt=''
                                        width='auto'
                                    />
                                </a>
                                <button className='navbar-close'>
                                    <svg
                                        className='h-6 w-6 cursor-pointer hover:text-indigo-500'
                                        xmlns='http://www.w3.org/2000/svg'
                                        fill='none'
                                        viewBox='0 0 24 24'
                                        stroke='currentColor'
                                    >
                                        <path
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                            strokeWidth={2}
                                            d='M6 18L18 6M6 6l12 12'
                                        />
                                    </svg>
                                </button>
                            </div>
                            <div>
                                <ul>
                                    <li className='mb-1'>
                                        <a
                                            className='block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded'
                                            href='#'
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li className='mb-1'>
                                        <a
                                            className='block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded'
                                            href='#'
                                        >
                                            Company
                                        </a>
                                    </li>
                                    <li className='mb-1'>
                                        <a
                                            className='block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded'
                                            href='#'
                                        >
                                            Services
                                        </a>
                                    </li>
                                    <li className='mb-1'>
                                        <a
                                            className='block p-4 text-sm font-semibold hover:bg-indigo-50 hover:text-indigo-500 rounded'
                                            href='#'
                                        >
                                            Testimonials
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className='mt-auto'>
                                <div className='pt-6'>
                                    <a
                                        className='block px-5 py-3 mb-3 text-sm text-center bg-indigo-500 hover:bg-indigo-600 text-white font-semibold border border-indigo-500 hover:border-indigo-600 rounded transition duration-200'
                                        href='#'
                                    >
                                        Sign in
                                    </a>
                                    <a
                                        className='block px-5 py-3 text-sm text-center font-semibold text-indigo-500 hover:text-white hover:bg-indigo-500 border border-indigo-500 hover:border-indigo-600 rounded transition duration-200'
                                        href='/signup'
                                    >
                                        Sign up for Waitlist
                                    </a>
                                </div>
                                <p className='mt-6 mb-4 text-sm text-center text-gray-500'>
                                    <span>© 2022 All rights reserved.</span>
                                </p>
                            </div>
                        </nav>
                    </div>
                </section>
                <section className='relative py-20'>
                    <div className='container px-4 mx-auto'>
                        <div className='flex items-center justify-around'>
                            <div className='max-w-4xl mx-auto'>
                                <div className='flex flex-wrap items-center -mx-4'>
                                    <div className='w-full lg:w-1/2 px-4'>
                                        <h2 className='mb-2 text-4xl leading-tight lg:text-5xl lg:leading-tight font-bold font-heading'>
                                            Sticks
                                        </h2>
                                        <p className='mb-4 text-2xl font-heading text-gray-400'>
                                            CEO &amp; Founder
                                        </p>
                                        <p className='max-w-xl mb-8 text-base leading-relaxed lg:text-xl lg:leading-relaxed text-gray-500'>
                                            Sticks saw that applications within
                                            the normal TMP interface was
                                            lacking. This inspired him to create
                                            EasyVTC
                                        </p>
                                    </div>
                                    <div className='w-full lg:w-1/2 px-4'>
                                        <img
                                            className='h-80 w-full mb-6 object-cover rounded-lg'
                                            src='plain-assets/images/gray-500-horizontal.png'
                                            alt=''
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className='flex-shrink-0 ml-2 lg:block w-16 h-16 p-5 rounded-full bg-gray-50 hover:bg-indigo-50'></button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
