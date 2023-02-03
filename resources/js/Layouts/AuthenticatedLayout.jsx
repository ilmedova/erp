import { Link } from '@inertiajs/react';

export default function Authenticated({ children }) {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    let path = location.pathname;
    let active = 'dashboard';
    let pages = ['profile', 'dashboard', 'docs', 'hr', 'sales', 'chat','settings'];
    pages.map((element) => { 
        if(path.includes(element)){
            active = element;
        }
    })

    const html = document.querySelector("html");
    function setTheme(theme){
        if(theme == 'dark'){
            html.classList.remove('light');
            localStorage.theme = 'dark'
        }
        if(theme == 'light'){
            html.classList.remove('dark');
            localStorage.theme = 'light'
        }
        html.classList.add(theme);

    }

    return (
        <div className="min-h-screen bg-gray-50 realtive flex w-full auto-cols-max dark:bg-zinc-900">
            <div className='flex fixed w-3/12'>
                <div className="flex flex-col items-center w-16 h-full overflow-hidden text-gray-800 bg-gray-200 min-h-screen dark:bg-zinc-700 dark:text-zinc-100">
                    <div className="flex flex-col items-center">
                        <Link className={active == 'dashboard' ? 'flex items-center justify-center w-10 h-10 mt-4 rounded-lg text-pink-600 bg-pink-100 border-2 border-pink-500' : 'flex items-center justify-center w-10 h-10 mt-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600'} href="/dashboard">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>
                        </Link>
                        <Link className={active == 'docs' ? 'flex items-center justify-center w-10 h-10 mt-4 rounded-lg text-green-600 bg-green-100 border-2 border-green-500' : 'flex items-center justify-center w-10 h-10 mt-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600'} href="/docs">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                            </svg>
                        </Link>
                        <Link className={active == 'hr' ? 'flex items-center justify-center w-10 h-10 mt-4 rounded-lg text-blue-600 bg-blue-100 border-2 border-blue-500' : 'flex items-center justify-center w-10 h-10 mt-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600'} href="/hr">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                        </Link>
                        <Link className={active == 'sales' ? "flex items-center justify-center w-10 h-10 mt-4 rounded-lg text-orange-600 bg-orange-100 border-2 border-orange-500" : 'flex items-center justify-center w-10 h-10 mt-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600'} href="/sales">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                        </Link>
                        <Link className={active == 'chat' ? "relative flex items-center justify-center w-10 h-10 mt-4 rounded-lg text-purple-600 bg-purple-100 border-2 border-purple-500" : 'flex items-center justify-center w-10 h-10 mt-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600'} href="/chat">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                            </svg>
                        </Link>
                        <a className="relative flex items-center justify-center w-10 h-10 mt-4 rounded-lg dark:text-gray-200" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                            </svg>
                        </a>
                    </div>
                    <div className="flex flex-col items-center mt-auto mb-4">
                        <Link className={active == 'profile' ? "flex items-center justify-center w-10 h-10 mt-auto mb-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 bg-gray-300 dark:bg-zinc-600 border-2 border-zinc-500" : "flex items-center justify-center w-10 h-10 mt-auto mb-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600"} href={route('profile.edit')}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </Link>
                        <Link className={active == 'settings' ? "flex items-center justify-center w-10 h-10 mt-auto mb-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 bg-gray-300 dark:bg-zinc-600 border-2 border-zinc-500" : "flex items-center justify-center w-10 h-10 mt-auto mb-4 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600"} href="/settings">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </Link>
                        <Link method="post" href={route('logout')} as="button" className="flex items-center justify-center w-10 h-10 mt-auto rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col w-60 h-full overflow-hidden text-gray-900 bg-gray-100 min-h-screen dark:bg-zinc-800 dark:text-zinc-100">
                    <div className="w-full p-2">
                    <div className="menu">
                        <div className="menu-header">
                            <div className="theme-switcher">
                                <input type="radio" id="light" value="light" name="themes"  defaultChecked={localStorage.theme == 'light' ? true : false}/>
                                <label htmlFor="light" onClick={() => {setTheme('light')}}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>Light
                                    </span>
                                </label>
                                <input type="radio" id="dark" value="dark" name="themes" defaultChecked={localStorage.theme == 'dark' ? true : false}/>
                                <label htmlFor="dark" onClick={() => {setTheme('dark')}}>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>Dark
                                    </span>
                                </label>
                                <span className="slider"></span>
                            </div>
                        </div>
                    </div>
                    <details className="question px-4 mb-2 mt-2 w-full">
                            <summary className="flex py-2  items-center rounded-lg">
                                Marketing
                                <button className="ml-auto">
                                    <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                </button>
                            </summary>
                            <div className="leading-normal">
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Partners
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Customers
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Vendors
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Agents
                                    </a>
                                </div>
                            </div>
                    </details>
                    <details className="question px-4 mb-2 w-full">
                            <summary className="flex py-2  items-center rounded-lg">
                                Sales
                                <button className="ml-auto">
                                    <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                </button>
                            </summary>
                            <div className="leading-normal">
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Partners
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Customers
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Vendors
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Agents
                                    </a>
                                </div>
                            </div>
                    </details>
                    <details className="question px-4 mb-2 w-full">
                            <summary className="flex py-2  items-center rounded-lg">
                                CRM
                                <button className="ml-auto">
                                    <svg className="fill-current opacity-75 w-4 h-4 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z"/></svg>
                                </button>
                            </summary>
                            <div className="leading-normal">
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Partners
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Customers
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Vendors
                                    </a>
                                </div>
                                <div className="flex items-center rounded-lg p-1.5 hover:bg-gray-200 dark:hover:bg-zinc-700">
                                    <a href="#" className="flex">
                                        <svg className="mr-2.5 h-5 w-5 flex-none stroke-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
                                        </svg>
                                        Agents
                                    </a>
                                </div>
                            </div>
                    </details>
                    </div>
                </div>
            </div>

            <div className="relative left-72 w-9/12 flex flex-col p-10 text-2xl font-bold">
                {children}
            </div>
        </div>
    );
}
