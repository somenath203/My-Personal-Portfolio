/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import PostmanStudentExpertImg from './../assets/postmanstudentexpertbatchimg.png';


const AllAchievements = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center text-green-800 dark:text-white">Loading Achievements...</p>
                </div>
            </>
        )
    };

    const myAchievements = [
        {
            id: 1,
            projectName: 'Postman API Fundamentals Student Expert',
            projectDescription: 'Got this batch for successfully testing APIs with Postman.',
            projectPic: PostmanStudentExpertImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            achievementLink: 'https://badgr.com/public/assertions/u9_k1c49QaOWTqEvt0oOzA?identity__email=somenathchoudhury35@gmail.com'
        }
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my achievements are fetched successfully');

        }, 2500);


    }, []);

    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-4xl lg:text-5xl text-center font-shantellSans tracking-wider text-green-900 dark:text-green-100'>My Achievements</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {myAchievements.map((myAchievements) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-rose-500 text-center rounded-xl shadow-2xl dark:bg-slate-800 dark:shadow-xl dark:shadow-rose-500 mb-36" key={myAchievements.id}>

                                <p className="mb-14 text-xl lg:text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{myAchievements.projectName}</p>

                                <img src={myAchievements.projectPic} alt={myAchievements.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${myAchievements.heightOfImg} ${myAchievements.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold text-rose-800 dark:text-rose-300 mb-7">{myAchievements.projectDescription}</p>

                                <div className="w-full mt-10">
                                    <a href={myAchievements.achievementLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-rose-600 rounded-xl shadow-xl transition-all duration-500 hover:bg-rose-400 tracking-widest">PREVIEW</button>
                                    </a>
                                </div>

                            </div>
                        ))}

                    </div>

                </div>

            </div>}
        </DefaultLayout>
    )
};

export default AllAchievements;