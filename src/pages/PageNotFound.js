import DefaultLayout from "../components/DefaultLayout";

import PageNotFoundImg from './../assets/pagenotfoundimg.svg';


const PageNotFound = () => {
  return (
    <DefaultLayout>

        <div className="min-h-screen flex justify-center">

            <div className="h-5/6 mt-24 md:mt-44 lg:mt-12">

                <img src={PageNotFoundImg} alt="page not found" className="scale-90" />

                <p className="text-center text-xl lg:text-3xl mt-6 font-nunito tracking-widest text-green-800 dark:text-green-100 font-bold">404 | Page Not Found</p>

            </div>

        </div>

    </DefaultLayout>
  )
};


export default PageNotFound;