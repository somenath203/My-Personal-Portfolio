/* eslint-disable react/jsx-no-target-blank */
import DefaultLayout from './../components/DefaultLayout';

import ConnectWithMeImg from './../assets/connectwithme.svg';
import Tippy from '@tippyjs/react';


const ConnectWithMe = () => {
    return (
        <DefaultLayout>

            <div className='min-h-screen dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/10 lg:p-8 lg:px-44 text-left rounded-xl flex items-center justify-center gap-12 flex-col lg:flex-row'>

                    <div className='mt-36 lg:mt-8'>
                        <p className='mb-14 text-xl text-center lg:text-left lg:text-3xl text-green-900 dark:text-green-100 font-shantellSans tracking-widest'>
                            Connect With Me
                        </p>

                        <p className='mb-8 text-xl lg:text-3xl text-center lg:text-left text-green-700 dark:text-green-300 font-semibold font-nunito tracking-wider flex gap-3 flex-col lg:flex-row'>
                            <span className='font-tiltNeon text-green'>EmailId: </span> <Tippy content='Click here to send me an Email'><a className='text-green-600 dark:text-green-400' href="mailto:somenathchoudhury35@gmail.com" target='_blank'>somenathchoudhury35@gmail.com</a></Tippy>
                        </p>

                        <p className='mb-0 lg:mb-8 text-lg lg:text-3xl font-semibold font-nunito tracking-wider'>
                            <p className='font-tiltNeon text-green-700 dark:text-green-300 flex items-center gap-4 flex-col lg:flex-row'> <span>Social Links: </span> <span className='flex gap-6'>
                                <a href="https://github.com/somenath203" target='_blank'><Tippy content='My Github Account Link'><i className="fa-brands fa-github text-black dark:text-white text-4xl"></i></Tippy></a>
                                <a href="https://www.linkedin.com/in/somenath-choudhury-79a36b1b6/" target='_blank'><Tippy content='My Linkedin Account Link'><i className="fa-brands fa-linkedin text-blue-600 dark:text-blue-400 text-4xl"></i></Tippy></a>
                                <a href="https://stackoverflow.com/users/14437554/somenath-choudhury" target='_blank'><Tippy content='My Stack Overflow Account Link'><i className="fa-brands fa-stack-overflow text-orange-500 dark:text-orange-400 text-4xl"></i></Tippy></a>
                            </span>
                            </p>
                        </p>
                    </div>

                    <div className='mt-8'>
                        <img src={ConnectWithMeImg} alt="aboutusimg" className='w-full scale-100 hidden lg:block' />
                    </div>

                </div>

            </div>

        </DefaultLayout>
    )
};


export default ConnectWithMe;