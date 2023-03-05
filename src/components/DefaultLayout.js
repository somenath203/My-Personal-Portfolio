import { NavLink } from "react-router-dom";
import Tippy from '@tippyjs/react';
import { useEffect, useState } from "react";

const DefaultLayout = ({ children }) => {

    const [isSideBarVisible, setIsSidebarVisible] = useState(false);

    const [myPortfolioTheme, setMyPortfolioTheme] = useState(localStorage.getItem('my-portfolio-theme'));


    useEffect(() => {

        if (myPortfolioTheme === 'dark') {

            document.documentElement.classList.add('dark');

            localStorage.setItem('my-portfolio-theme', 'dark');

        } else {

            document.documentElement.classList.remove('dark');

            localStorage.setItem('my-portfolio-theme', 'light');

        }

    }, [myPortfolioTheme]);


    const toggleTheme = () => {

        setMyPortfolioTheme(myPortfolioTheme === 'dark' ? 'light' : 'dark');

    }


    return (
        <>

            <header className="flex justify-between items-center px-14 py-8 text-2xl text-green-700 dark:text-green-300 font-shantellSans cursor-pointer shadow-lg dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900">


                <div className="text-xl lg:text-4xl font-shantellSans font-bold text-green-700 dark:text-green-300 tracking-widest uppercase">My Portfolio</div>


                <div className="hidden lg:flex lg:gap-5">

                    <Tippy content='About Me Page'>
                        <NavLink to='/about'>
                            <p>AboutMe</p>
                        </NavLink>
                    </Tippy>

                    <Tippy content='About Me Page'>
                        <NavLink to='/myskills'>
                            <p>MySkills</p>
                        </NavLink>
                    </Tippy>

                    <Tippy content='Project Categories Page'>
                        <NavLink to='/project-category'>
                            <p>Projects</p>
                        </NavLink>
                    </Tippy>

                    <Tippy content='Achievements Page'>
                        <NavLink to='/all-achievements'>
                            <p>Achievements</p>
                        </NavLink>
                    </Tippy>

                </div>


                <div className="hidden lg:flex gap-8">

                    <Tippy content='Connect With Me'>
                        <NavLink to='/connect-with-me'>
                            <p>Connect</p>
                        </NavLink>
                    </Tippy>

                    <Tippy content='Toogle Dark/Light Mode'>
                        <p className="text-3xl text-black">
                            {myPortfolioTheme === 'dark' ? <i className="fa-solid fa-sun text-white" onClick={toggleTheme}></i> : <i className="fa-solid fa-moon" onClick={toggleTheme}></i>}
                        </p>
                    </Tippy>

                </div>

                {isSideBarVisible ?
                    <button className="fixed top-12 right-12 lg:hidden text-3xl z-30"><i className="ri-close-fill" onClick={() => setIsSidebarVisible(false)}></i></button>
                    :
                    <button className="block lg:hidden text-2xl" onClick={() => setIsSidebarVisible(true)}><i className="ri-menu-line"></i></button>
                }


            </header>


            <div className={`top-0 right-0 z-20 fixed h-full w-10/12 lg:w-1/4 bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center flex-col gap-16 font-bold text-2xl text-white duration-300 ease-in-out ${isSideBarVisible ? 'translate-x-0' : 'translate-x-full'}`}>

                <Tippy content='About Me Page'>
                    <NavLink to='/about'>
                        <p className="mt-20 text-xl text-green-800 dark:text-green-300 font-shantellSans" onClick={() => setIsSidebarVisible(false)}>AboutMe</p>
                    </NavLink>
                </Tippy>

                <Tippy content='About Me Page'>
                    <NavLink to='/myskills'>
                        <p className="text-xl text-green-800 dark:text-green-300 font-shantellSans" onClick={() => setIsSidebarVisible(false)}>MySkills</p>
                    </NavLink>
                </Tippy>

                <Tippy content='Project Categories Page'>
                    <NavLink to='/project-category'>
                        <p className="text-xl text-green-800 dark:text-green-300 font-shantellSans" onClick={() => setIsSidebarVisible(false)}>Projects</p>
                    </NavLink>
                </Tippy>

                <Tippy content='Achievements Page'>
                    <NavLink to='/all-achievements'>
                        <p className="text-xl text-green-800 dark:text-green-300 font-shantellSans" onClick={() => setIsSidebarVisible(false)}>Achievements</p>
                    </NavLink>
                </Tippy>

                <Tippy content='Connect With Me'>
                    <NavLink to='/connect-with-me'>
                        <p className="text-xl text-green-800 dark:text-green-300 font-shantellSans" onClick={() => setIsSidebarVisible(false)}>Connect</p>
                    </NavLink>
                </Tippy>

                <Tippy content='Toogle Dark/Light Mode'>
                    <p className="text-xl text-black">
                        {myPortfolioTheme === 'dark' ? <i className="fa-solid fa-sun text-white cursor-pointer" onClick={() => { setIsSidebarVisible(false); toggleTheme(); }}></i> : <i className="fa-solid fa-moon cursor-pointer" onClick={() => { setIsSidebarVisible(false); toggleTheme(); }}></i>}
                    </p>
                </Tippy>

            </div>



            {children}

        </>
    )
};

export default DefaultLayout;