import { NavLink } from 'react-router-dom';
import DefaultLayout from './../components/DefaultLayout';

import AboutImg from './../assets/about-us.svg';
import ResumePDF from './../assets/my_resume_updated.pdf';


const About = () => {
  return (
    <DefaultLayout>

      <div className='min-h-screen dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

        <div className='w-11/10 p-8 lg:px-44 text-center lg:text-left rounded-xl grid grid-cols-1 lg:grid-cols-2 items-center gap-28'>

          <div className='mt-8'>
            <p className='mb-10 text-3xl lg:text-4xl text-green-900 dark:text-green-50 font-shantellSans tracking-widest'>My name is Somenath Choudhury</p>

            <p className='mb-3 text-xl text-green-600 dark:text-green-200 font-semibold font-nunito tracking-widest lg:tracking-wider'>I am a coder who loves to learn and explore various programming languages. I love learning new technologies and frameworks and create something unique out of it.</p>

            <p className='mb-8 text-xl text-green-600 dark:text-green-200 dark:text-green-300dark:text-green-300 font-semibold font-nunito tracking-widest lg:tracking-wider'>I have created various projects related to web development and machine learning which you can check by clicking <NavLink to='/project-category'><span className='text-green-600 dark:text-green-400 uppercase text-2xl'>here.</span></NavLink></p>

            <a href={ResumePDF} download="my_resume">
              <button className='m-auto lg:m-0 p-7 lg:px-10 lg:py-6 outline-none shadow-xl rounded-2xl border-b-8 border-green-700 dark:border-green-500 flex items-center justify-center gap-3 transition-all duration-500 hover:scale-110 hover:bg-green-50 dark:hover:bg-slate-900'>
                <i className="ri-download-cloud-2-line text-4xl text-green-700 dark:text-green-400"></i> <span className='uppercase font-nunito font-semibold text-base lg:text-xl tracking-widest text-green-700 dark:text-green-400'>Download Resume</span>
              </button>
            </a>

          </div>

          <div>
            <img src={AboutImg} alt="aboutusimg" className='hidden lg:block w-full scale-90 mt-8' />
          </div>

        </div>

      </div>


    </DefaultLayout>
  )
};


export default About;