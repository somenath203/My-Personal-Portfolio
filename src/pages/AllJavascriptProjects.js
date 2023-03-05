/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import YourSecretMessagePic from './../assets/yoursecretmessage.png';
import CharacterCounterPic from './../assets/charactercounter.png';
import BookmarkAppPic from './../assets/bookmarkapp.jpg';
import JSONFormatterPic from './../assets/jsonformatter.png';



const AllJavascriptProjects = () => {


    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center text-green-800 dark:text-white">Loading javascript Projects...</p>
                </div>
            </>
        )
    };


    const jsProjectLists = [
        {
            id: 1,
            projectName: 'Your Secret Message',
            projectDescription: 'This is a project which the user can use to send a secret message to anyone.',
            projectPic: YourSecretMessagePic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Html, CSS, Javascript',
            projectLivePreviewLink: 'https://secretmessage-pied.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Your-Secret-Message'
        },
        {
            id: 2,
            projectName: 'Character Counter',
            projectDescription: 'This is a project where the user can bookmark all the important websites that the user wants to access in no time..',
            projectPic: CharacterCounterPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Html, CSS, Javascript',
            projectLivePreviewLink: 'https://merry-sprite-9115d1.netlify.app/',
            projectGithubLink: 'https://github.com/somenath203/javascript-Character-Counter'
        },
        {
            id: 3,
            projectName: 'Bookmark App',
            projectDescription: 'This is a simple react CRUD application where the user will be able to add, update and delete groceries.',
            projectPic: BookmarkAppPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Html, CSS, Javascript',
            projectLivePreviewLink: 'https://javascript-bookmark-app.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Javascript-Bookmark-App'
        },
        {
            id: 4,
            projectName: 'JSON Formatter',
            projectDescription: 'This is a project where the user will be able to format his/her JSON data as well as get a minified version of the JSON data as well.',
            projectPic: JSONFormatterPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'Html, CSS, Javascript',
            projectLivePreviewLink: 'https://json-formatter-som.netlify.app/',
            projectGithubLink: 'https://github.com/somenath203/JSON-Formatter'
        },
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my javascript projects are fetched successfully');

        }, 2500);


    }, []);

    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-3xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-white'>Javascript Projects</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {jsProjectLists.map((jsProject) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-yellow-500 text-center rounded-xl shadow-2xl dark:bg-slate-800 dark:shadow-2xl dark:shadow-yellow-600" key={jsProject.id}>

                                <p className="mb-14 text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{jsProject.projectName}</p>

                                <img src={jsProject.projectPic} alt={jsProject.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${jsProject.heightOfImg} ${jsProject.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold text-yellow-600 dark:text-yellow-400 mb-7">{jsProject.projectDescription}</p>

                                <p className="text-xl font-mukta font-bold text-yellow-500 dark:text-yellow-200 mb-12">Tech Stack: {jsProject.techStack}</p>

                                <div className="w-full flex justify-between items-center">
                                    <a href={jsProject.projectLivePreviewLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-yellow-600 rounded-xl shadow-xl transition-all duration-500 hover:bg-yellow-400">Live Preview</button>
                                    </a>

                                    <a href={jsProject.projectGithubLink} target='_blank'>
                                        <button>
                                            <i className="fa-brands fa-github text-4xl transition-all duration-500 text-yellow-900 dark:text-yellow-500 hover:text-yellow-700"></i>
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

export default AllJavascriptProjects;