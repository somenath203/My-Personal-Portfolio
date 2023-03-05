/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import ImageGalleryPic from './../assets/imagegallery.png';
import MyExpenseManagerPic from './../assets/myexpensemanager.png';
import ShortMyURLPic from './../assets/shortmyurlpic.png';


const AllMernProjects = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center text-green-800 dark:text-white">Loading Mern Stack Projects...</p>
                </div>
            </>
        )
    };

    const mernProjectLists = [
        {
            id: 1,
            projectName: 'Image Gallery',
            projectDescription: 'This is a project with the help of which a user will be able to store his/her best memories in his/her life.',
            projectPic: ImageGalleryPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, TailwindCSS, ExpressJS, MongoDB, Cloudinary',
            projectLivePreviewLink: 'https://mern-stack-image-gallery-frontend-fh09y4t7a-somenath203.vercel.app/register',
            projectGithubLink: 'https://github.com/somenath203/Mern-Stack-Image-Gallery-Frontend'
        },
        {
            id: 2,
            projectName: 'My Finance Manager',
            projectDescription: 'This is a project where a user will be able to add his/her savings, expenditures, and investments and on the basis of that, the user will get to know how he/she should use his/her money.',
            projectPic: MyExpenseManagerPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, TailwindCSS, antd, ExpressJS, MongoDB',
            projectLivePreviewLink: 'https://my-finance-manager-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/My-Finance-Manager-Frontend'
        },
        {
            id: 3,
            projectName: 'ShortMyURL',
            projectDescription: 'This is website where a user will be able to reduce the size of url of any length.',
            projectPic: ShortMyURLPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, TailwindCSS, ExpressJS, MongoDB',
            projectLivePreviewLink: 'https://mern-stack-url-shortener-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Mern-Stack-URL-Shortener-Frontend'
        },
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my mern projects are fetched successfully');

        }, 2500);

    }, []);

    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-3xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>MERN Projects</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {mernProjectLists.map((mernProject) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-fuchsia-500 text-center rounded-2xl shadow-xl dark:text-white dark:bg-slate-800 dark:shadow-fuchsia-500" key={mernProject.id}>

                                <p className="mb-14 text-2xl font-bold tracking-wider font-tiltNeon">{mernProject.projectName}</p>

                                <img src={mernProject.projectPic} alt={mernProject.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${mernProject.heightOfImg} ${mernProject.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold text-fuchsia-800 dark:text-fuchsia-200 mb-7">{mernProject.projectDescription}</p>

                                <p className="text-xl font-mukta font-bold text-fuchsia-500 dark:text-fuchsia-300 mb-12">Tech Stack: {mernProject.techStack}</p>

                                <div className="w-full flex justify-between items-center">
                                    <a href={mernProject.projectLivePreviewLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-fuchsia-600 rounded-xl shadow-xl transition-all duration-500 hover:bg-fuchsia-400">Live Preview</button>
                                    </a>

                                    <a href={mernProject.projectGithubLink} target='_blank'>
                                        <button>
                                            <i className="fa-brands fa-github text-4xl transition-all duration-500 text-fuchsia-900 dark:text-fuchsia-400 hover:text-fuchsia-700"></i>
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

export default AllMernProjects;