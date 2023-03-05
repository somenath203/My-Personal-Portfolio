/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import BlogProjImg from './../assets/blogproj.png';
import JobsAPIProjImg from './../assets/jobsapi.png';
import AmazonWebScrapperProjImg from './../assets/amazonwebscrapper.png';


const AllNodeJSProjects = () => {


    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center text-green-800 dark:text-white">Loading NodeJS Projects...</p>
                </div>
            </>
        )
    };


    const nodeProjectLists = [
        {
            id: 1,
            projectName: 'Blog API',
            projectDescription: 'This is a blog application API where a user can share his/her knowledge with the whole world in the form of blogs.',
            projectPic: BlogProjImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'NodeJS, ExpressJS, MongoDB, CLoudinary',
            projectLivePreviewLink: 'https://blog-api-links.netlify.app/',
            projectGithubLink: 'https://github.com/somenath203/Titanic-Survival-Project-Frontend'
        },
        {
            id: 2,
            projectName: 'Jobs API',
            projectDescription: 'This is a API which recruiters can use to hire potential candidates for there respective companies/organizations.',
            projectPic: JobsAPIProjImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'NodeJS, ExpressJS, MongoDB, CLoudinary, Sendgrid',
            projectLivePreviewLink: 'https://share.streamlit.io/somenath203/a.i.-powered-boston-house-price-predictor-website/main/boston_house_web_app.py',
            projectGithubLink: 'https://github.com/somenath203/Blog-Backend-API'
        },
        {
            id: 3,
            projectName: 'Amazon Web Scrapper API',
            projectDescription: 'This is a web scrapping API which a user can use to get different types of details about a particular product in Amazon.',
            projectPic: AmazonWebScrapperProjImg,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'NodeJS, ExpressJS, ScraperAPI',
            projectLivePreviewLink: 'https://amazon-web-scrapping-api.onrender.com/',
            projectGithubLink: 'https://github.com/somenath203/Amazon-Web-Scraper-API'
        },
    ];

    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my nodejs projects are fetched successfully');

        }, 2500);


    }, []);
    
    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-3xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>NodeJS Projects</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {nodeProjectLists.map((nodeProject) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-green-500 text-center rounded-xl shadow-2xl dark:bg-slate-800 dark:shadow-2xl dark:shadow-green-500" key={nodeProject.id}>

                                <p className="mb-14 text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{nodeProject.projectName}</p>

                                <img src={nodeProject.projectPic} alt={nodeProject.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${nodeProject.heightOfImg} ${nodeProject.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold texgreen-800 mb-7 text-green-800 dark:text-green-200">{nodeProject.projectDescription}</p>

                                <p className="text-xl font-mukta font-bold texgreen-700 mb-12 text-green-600 dark:text-green-300">Tech Stack: {nodeProject.techStack}</p>

                                <div className="w-full flex justify-between items-center">
                                    <a href={nodeProject.projectLivePreviewLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-green-400 rounded-xl shadow-xl transition-all duration-500 hover:bg-green-700">Live Preview</button>
                                    </a>

                                    <a href={nodeProject.projectGithubLink} target='_blank'>
                                        <button>
                                            <i className="fa-brands fa-github text-4xl transition-all duration-500 text-green-900 dark:text-green-400 hover:text-green-700"></i>
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

export default AllNodeJSProjects;