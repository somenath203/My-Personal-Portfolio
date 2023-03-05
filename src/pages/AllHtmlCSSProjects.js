/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import OmnifoodPic from './../assets/omnifoodpic.png';
import KolkataDines from './../assets/kolkatadinespic.png';


const AllHtmlCSSProjects = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center text-green-800 dark:text-white">Loading Html/CSS Projects...</p>
                </div>
            </>
        )
    };

    const htmlProjectLists = [
        {
            id: 1,
            projectName: 'Omnifood',
            projectDescription: 'This is a fictional onlint food ordering website created with the help of Html and CSS.',
            projectPic: OmnifoodPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Html, CSS',
            projectLivePreviewLink: 'https://omnifood-somenath.netlify.app/',
            projectGithubLink: 'https://github.com/somenath203/Omnifood'
        },
        {
            id: 2,
            projectName: 'Kolkata Dines',
            projectDescription: 'This is website of a fictional hotel by the name Kolkata Dines created with the help of Html and CSS.',
            projectPic: KolkataDines,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Html, CSS',
            projectLivePreviewLink: 'https://lovely-rabanadas-dc5fc8.netlify.app/',
            projectGithubLink: 'https://github.com/somenath203/css-hotel-website'
        }
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all html/css projects fetched successfully');

        }, 2500);

        

    }, []);

    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-3xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>Html/CSS Projects</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {htmlProjectLists.map((htmlProject) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-orange-500 text-center rounded-xl shadow-2xl dark:bg-slate-800 dark:shadow-2xl dark:shadow-orange-500" key={htmlProject.id}>

                                <p className="mb-14 text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{htmlProject.projectName}</p>

                                <img src={htmlProject.projectPic} alt={htmlProject.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${htmlProject.heightOfImg} ${htmlProject.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold text-orange-800 mb-7 dark:text-orange-300">{htmlProject.projectDescription}</p>

                                <p className="text-xl font-mukta font-bold text-orange-700 mb-12 dark:text-orange-400">Tech Stack: {htmlProject.techStack}</p>

                                <div className="w-full flex justify-between items-center">
                                    <a href={htmlProject.projectLivePreviewLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-orange-600 rounded-xl shadow-xl transition-all duration-500 hover:bg-orange-400">Live Preview</button>
                                    </a>

                                    <a href={htmlProject.projectGithubLink} target='_blank'>
                                        <button>
                                            <i className="fa-brands fa-github text-4xl transition-all duration-500 text-orange-900 dark:text-orange-400 hover:text-orange-700"></i>
                                        </button>
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

export default AllHtmlCSSProjects;