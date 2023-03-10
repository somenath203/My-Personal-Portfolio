/* eslint-disable react/jsx-no-target-blank */
import DefaultLayout from './../components/DefaultLayout';


const ConnectWithMe = () => {
    return (
        <DefaultLayout>

            <div className='min-h-screen dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

                <div className='w-11/10 mt-16 lg:mt-24 lg:px-44 text-center rounded-xl flex flex-col lg:flex-row items-center justify-center'>

                    <div>

                        <p className='mb-12 text-4xl text-green-900 dark:text-green-200 font-shantellSans tracking-widest'>
                            My Skills
                        </p>

                        <div className='text-2xl font-semibold font-nunito tracking-wider flex flex-col gap-10'>

                            <div className='flex flex-col text-2xl gap-4'>
                                <span className='text-green-700 dark:text-green-300'>Technologies: </span>
                                <span className='flex items-center justify-center gap-6 flex-col lg:flex-row dark:text-white'>
                                    <span>C,</span>
                                    <span>C++,</span>
                                    <span>Javascript,</span>
                                    <span>Python</span>
                                </span>
                            </div>

                            <div className='flex flex-col gap-3'>
                                <span className='text-green-700 dark:text-green-300'>Web Development: </span>
                                <span className='flex justify-center items-center gap-6 flex-col lg:flex-row dark:text-white'>
                                    <span>ReactJS,</span>
                                    <span>NodeJS,</span>
                                    <span>antd,</span>
                                    <span>TailwindCSS,</span>
                                    <span>MongoDB,</span>
                                    <span>Cloudinary,</span>
                                    <span>FastAPI</span>
                                </span>
                            </div>

                            <div className='mb-6 flex flex-col gap-3'>
                                <span className='text-green-700 dark:text-green-300'>Machine Learning: </span>
                                <span className='flex justify-center items-center gap-6 flex-col lg:flex-row dark:text-white'>
                                    <span>Numpy,</span>
                                    <span>Matplotlib,</span>
                                    <span>Seaborn,</span>
                                    <span>Pandas,</span>
                                    <span>Scikitlearn</span>
                                </span>
                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </DefaultLayout>
    )
};


export default ConnectWithMe;
