/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import TitanicProjPic from './../assets/titanic_proj.png';
import HousePredictorPic from './../assets/housepredictorpic.png';


const AllMlProjects = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center text-green-800 dark:text-white">Loading Machine Learning Projects...</p>
                </div>
            </>
        )
    };

    const mlProjectLists = [
        {
            id: 1,
            projectName: 'Titanic Survival Project',
            projectDescription: 'This is a project which will predict weather a particular person will survive or not based on certain parameters.',
            projectPic: TitanicProjPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React ChakraUI, FastAPI, Pandas, Scikit-learn',
            projectLivePreviewLink: 'https://titanic-survival-project-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Titanic-Survival-Project-Frontend'
        },
        {
            id: 2,
            projectName: 'House Price Predictor',
            projectDescription: 'This is a project created using Streamlit and Linear Regression Model which predicts the price of Boston House Data.',
            projectPic: HousePredictorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Streamlit, Scikit-learn',
            projectLivePreviewLink: 'https://share.streamlit.io/somenath203/a.i.-powered-boston-house-price-predictor-website/main/boston_house_web_app.py',
            projectGithubLink: 'https://github.com/somenath203/A.I.-Powered-Boston-House-Price-Predictor-Website'
        },
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my ml projects are fetched successfully');

        }, 2500);


    }, []);

    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-4xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>Ml Projects</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {mlProjectLists.map((mlProject) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-indigo-500 text-center rounded-xl shadow-2xl dark:bg-slate-800 dark:shadow-indigo-500" key={mlProject.id}>

                                <p className="mb-14 text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{mlProject.projectName}</p>

                                <img src={mlProject.projectPic} alt={mlProject.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${mlProject.heightOfImg} ${mlProject.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold text-blue-800 dark:text-blue-200 mb-7">{mlProject.projectDescription}</p>

                                <p className="text-xl font-mukta font-bold text-blue-700 dark:text-blue-400 mb-12">Tech Stack: {mlProject.techStack}</p>

                                <div className="w-full flex justify-between items-center">
                                    <a href={mlProject.projectLivePreviewLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-indigo-400 rounded-xl shadow-xl transition-all duration-500 hover:bg-indigo-700">Live Preview</button>
                                    </a>

                                    <a href={mlProject.projectGithubLink} target='_blank'>
                                        <button>
                                            <i className="fa-brands fa-github text-4xl transition-all duration-500 text-indigo-900 dark:text-indigo-300 hover:text-indigo-700"></i>
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

export default AllMlProjects;