/* eslint-disable react/jsx-no-target-blank */
import { useEffect, useState } from "react";
import { message } from "antd";

import DefaultLayout from "../components/DefaultLayout";

import LoremIpsumGeneratorPic from './../assets/loremipsumgeneratorpic.png';
import ColorsGeneratorPic from './../assets/colorsgenerator.png';
import GroceryPic from './../assets/grocerybud.png';


const AllReactProjects = () => {

    const [openingScreenLoading, setOpeningScreenLoading] = useState(false);

    const LoadingSpinner = () => {
        return (
            <>
                <div className='mt-2 min-h-screen flex items-center justify-center flex-col gap-14 bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>
                    <i className="fa-solid fa-spinner animate-spin text-black dark:text-green-50 text-9xl"></i>
                    <p className="text-xl lg:text-3xl text-center text-green-800 dark:text-white">Loading React Projects...</p>
                </div>
            </>
        )
    };

    const reactProjectLists = [
        {
            id: 1,
            projectName: 'Lorem Ipsum Generator',
            projectDescription: 'This is a project created with the help of ReactJS and TailwindCSS where a user can generate lorem ipsum text.',
            projectPic: LoremIpsumGeneratorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React, TailwindCSS',
            projectLivePreviewLink: 'https://generate-lorem-ipsum-11.netlify.app/',
            projectGithubLink: 'https://github.com/somenath203/React-Lorem-Ipsum-Generator'
        },
        {
            id: 2,
            projectName: 'Color Generator',
            projectDescription: 'This is a project where the user will be able to generate various tints and shades of a particular color by writing the hex code of that color in the input box.',
            projectPic: ColorsGeneratorPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React',
            projectLivePreviewLink: 'https://my-finance-manager-frontend.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/My-Finance-Manager-Frontend'
        },
        {
            id: 3,
            projectName: 'Grocery Bud',
            projectDescription: 'This is a simple react CRUD application where the user will be able to add, update and delete groceries.',
            projectPic: GroceryPic,
            heightOfImg: 'h-60',
            widthOfImg: 'w-screen',
            techStack: 'React',
            projectLivePreviewLink: 'https://grocery-bud-lemon.vercel.app/',
            projectGithubLink: 'https://github.com/somenath203/Grocery-Bud'
        },
    ];


    useEffect(() => {

        setOpeningScreenLoading(true);

        setTimeout(() => {

            setOpeningScreenLoading(false);

            message.success('all of my react projects are fetched successfully');

        }, 2500);


    }, []);

    return (
        <DefaultLayout>
            {openingScreenLoading ? <LoadingSpinner /> : <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/12'>

                    <p className='mt-20 text-3xl lg:text-5xl text-center font-tiltNeon tracking-wider text-green-900 dark:text-green-100'>React Projects</p>

                    <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>

                        {reactProjectLists.map((reactProject) => (
                            <div className="p-12 bg-slate-50 border-b-8 border-indigo-500 text-center rounded-xl shadow-2xl dark:bg-slate-800 dark:shadow-indigo-500" key={reactProject.id}>

                                <p className="mb-14 text-2xl font-bold tracking-wider font-tiltNeon dark:text-white">{reactProject.projectName}</p>

                                <img src={reactProject.projectPic} alt={reactProject.projectName} className={`mix-blend-multiply dark:mix-blend-normal ${reactProject.heightOfImg} ${reactProject.widthOfImg} mb-11 rounded-xl shadow-xl`} />

                                <p className="text-xl font-nunito font-bold text-indigo-800 dark:text-indigo-200 mb-7">{reactProject.projectDescription}</p>

                                <p className="text-xl font-mukta font-bold text-indigo-500 dark:text-indigo-400 mb-12">Tech Stack: {reactProject.techStack}</p>

                                <div className="w-full flex justify-between items-center">
                                    <a href={reactProject.projectLivePreviewLink} target='_blank'>
                                        <button className="py-4 px-7 text-white text-xl bg-indigo-600 rounded-xl shadow-xl transition-all duration-500 hover:bg-indigo-400">Live Preview</button>
                                    </a>

                                    <a href={reactProject.projectGithubLink} target='_blank'>
                                        <button>
                                            <i className="fa-brands fa-github text-4xl transition-all duration-500 text-indigo-900 dark:text-indigo-400 hover:text-indigo-700"></i>
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

export default AllReactProjects;