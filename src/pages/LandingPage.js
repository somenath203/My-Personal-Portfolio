import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';


const LandingPage = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='min-h-screen flex items-center justify-center bg-gradient-to-r from-slate-800 to-slate-900'>
                    <i className="ri-refresh-line animate-spin text-green-50 text-9xl"></i>
                </div>
            </>
        )
    };

    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {
            setOpeningScreenLoading(false);
        }, 2500);

    }, []);

    return (
        <>
            {openingScreenLoading ? <LoadingSpinner /> : <div className="min-h-screen flex items-center justify-center flex-col gap-20 bg-landing-page-image bg-no-repeat bg-cover bg-center bg-fixed">

                <p className='text-white text-3xl text-center font-bold font-tiltNeon tracking-widest'>
                    <Typewriter
                        words={['Hi', 'My name is Somenath Choudhury', 'Welcome to my Portfolio Website']}
                        loop={5}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1400}
                    />
                </p>

                <NavLink to='/about'>
                    <button className='bg-slate-800 px-16 py-8 text-xl font-shantellSans tracking-widest font-bold text-white border-b-8 border-green-500 shadow-lg rounded-3xl transition-all duration-500 hover:bg-slate-700 hover:scale-110'>Get Started</button>
                </NavLink>

            </div>}
        </>
    )
};

export default LandingPage;