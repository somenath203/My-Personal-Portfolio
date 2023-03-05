import { NavLink } from 'react-router-dom';

import DefaultLayout from './../components/DefaultLayout';

import HtmlANdCSSImg from './../assets/htmlandcss.png';
import JSImg from './../assets/jsimg.jpg';
import ReactImg from './../assets/react-img.png';
import NodeJSImg from './../assets/nodejsimg.png';
import MERNImage from './../assets/mernimg.png';
import MLImage from './../assets/mlimg.png';
import FirebaseImg from './../assets/firebaseimg.png'


const ProjectCategory = () => {

  const allProjectsArray = [
    {
      id: 1,
      categoryName: 'Html/CSS Projects',
      imageUrl: HtmlANdCSSImg,
      widthOfImg: 'w-70',
      heightOfImg: 'h-40',
      categoryDescription: 'Click below to get all my HTML/CSS Projects',
      redirectUrl: '/html-css-projects',
      borderColor: 'border-orange-500',
      descriptionColor: 'text-orange-700 ',
      descriptionColorDark: 'text-orange-300',
      btnBgColor: 'bg-red-500',
    },
    {
      id: 2,
      categoryName: 'Javascript Projects',
      imageUrl: JSImg,
      widthOfImg: 'w-70',
      heightOfImg: 'h-40',
      categoryDescription: 'Click below to get all my Javascript Projects',
      redirectUrl: '/js-projects',
      borderColor: 'border-yellow-500',
      descriptionColor: 'text-yellow-700 ',
      descriptionColorDark: 'text-yellow-400',
      btnBgColor: 'bg-yellow-600',
    },
    {
      id: 3,
      categoryName: 'React Projects',
      imageUrl: ReactImg,
      widthOfImg: 'w-50',
      heightOfImg: 'h-40',
      categoryDescription: 'Click below to get all my React Projects',
      redirectUrl: '/react-projects',
      borderColor: 'border-blue-600',
      descriptionColor: 'text-blue-700',
      descriptionColorDark: 'text-blue-300',
      btnBgColor: 'bg-blue-500',
    },
    {
      id: 3,
      categoryName: 'Firebase Projects',
      imageUrl: FirebaseImg,
      widthOfImg: 'w-50',
      heightOfImg: 'h-40',
      categoryDescription: 'Click below to get all my Firebase Projects',
      redirectUrl: '/firebase-projects',
      borderColor: 'border-orange-600',
      descriptionColor: 'text-orange-700 ',
      descriptionColorDark: 'text-orange-300',
      btnBgColor: 'bg-orange-500',
    },
    {
      id: 4,
      categoryName: 'NodeJS Projects',
      imageUrl: NodeJSImg,
      widthOfImg: 'w-50',
      heightOfImg: 'h-40',
      categoryDescription: 'Click below to get all my NodeJS Projects',
      redirectUrl: '/nodejs-projects',
      borderColor: 'border-green-600',
      descriptionColorDark: 'text-green-300',
      descriptionColor: 'text-green-700 ',
      btnBgColor: 'bg-green-500',
    },
    {
      id: 5,
      categoryName: 'MERN Projects',
      imageUrl: MERNImage,
      widthOfImg: 'w-70',
      heightOfImg: 'h-40',
      categoryDescription: 'Click below to get all my MERN Projects',
      redirectUrl: '/mern-projects',
      borderColor: 'border-fuchsia-600',
      descriptionColor: 'text-fuchsia-800',
      descriptionColorDark: 'text-fuchsia-300',
      btnBgColor: 'bg-fuchsia-700',
    },
    {
      id: 6,
      categoryName: 'Ml Projects',
      imageUrl: MLImage,
      widthOfImg: 'w-70',
      heightOfImg: 'h-40',
      categoryDescription: 'Click below to get all my Machine-Learning Projects',
      redirectUrl: '/ml-projects',
      borderColor: 'border-indigo-500',
      descriptionColor: 'text-indigo-700',
      descriptionColorDark: 'text-indigo-300',
      btnBgColor: 'bg-indigo-600',
    },
  ];

  return (
    <DefaultLayout>

      <div className='min-h-screen flex justify-center dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900'>

        <div className='w-10/12'>

          <p className='mt-20 text-4xl lg:text-5xl text-center font-shantellSans tracking-wider text-green-900 dark:text-green-100'>My Projects</p>

          <div className='mt-16 grid grid-cols-1 lg:grid-cols-3 gap-20 pb-10'>
            {allProjectsArray.map((projectCategory) => (
              <div key={projectCategory.id} className={`p-10 bg-slate-50 flex items-center justify-center flex-col gap-7 shadow-2xl border-b-8 ${projectCategory.borderColor} rounded-3xl dark:bg-slate-800`}>

                <p className='text-xl lg:text-3xl text-center font-nunito tracking-wider font-bold pb-5 dark:text-white'>{projectCategory.categoryName}</p>8

                <img src={projectCategory.imageUrl} alt={projectCategory.categoryName} className={`${projectCategory.widthOfImg} ${projectCategory.heightOfImg}`} />

                <p className={`text-xl lg:text-2xl ${projectCategory.descriptionColor} dark:${projectCategory.descriptionColorDark} font-mukta text-center mt-6 font-semibold tracking-widest`}>{projectCategory.categoryDescription}</p>

                <NavLink to={projectCategory.redirectUrl}><button className={`py-5 px-10 border-none outline-none shadow-xl rounded-xl text-lg lg:text-2xl tracking-widest uppercase text-white ${projectCategory.btnBgColor} text-center font-nunito font-semibold transition-all duration-500 hover:scale-110`}>Click Here</button></NavLink>

              </div>
            ))}
          </div>

        </div>

      </div>

    </DefaultLayout>
  )
};

export default ProjectCategory;