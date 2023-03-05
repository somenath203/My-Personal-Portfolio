import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import About from './pages/About';
import MySkills from './pages/MySkills';
import ProjectCategory from './pages/ProjectCategory';
import AllMlProjects from "./pages/AllMlProjects";
import AllNodeJSProjects from "./pages/AllNodeJSProjects";
import AllHtmlCSSProjects from "./pages/AllHtmlCSSProjects";
import AllMernProjects from './pages/AllMernProjects';
import AllReactProjects from "./pages/AllReactProjects";
import AllJavascriptProjects from "./pages/AllJavascriptProjects";
import AllFirebaseProjects from "./pages/AllFirebaseProjects";
import ConnectWithMe from "./pages/ConnectWithMe";
import AllAchievements from "./pages/AllAchievements";
import PageNotFound from "./pages/PageNotFound";


const App = () => {
  return (
    <div className="bg-white dark:bg-gradient-to-r dark:from-slate-800 dark:to-slate-900">
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/myskills" element={<MySkills />} />
          <Route path="/project-category" element={<ProjectCategory />} />
          <Route path="/ml-projects" element={<AllMlProjects />} />
          <Route path="/nodejs-projects" element={<AllNodeJSProjects />} />
          <Route path="/html-css-projects" element={<AllHtmlCSSProjects />} />
          <Route path="/mern-projects" element={<AllMernProjects />} />
          <Route path="/react-projects" element={<AllReactProjects />} />
          <Route path="/js-projects" element={<AllJavascriptProjects />} />
          <Route path="/firebase-projects" element={<AllFirebaseProjects />} />
          <Route path="/connect-with-me" element={<ConnectWithMe />} />
          <Route path="/all-achievements" element={<AllAchievements />} />
          <Route path="*" element={<PageNotFound />} />

        </Routes>

      </BrowserRouter>
    </div>
  )
};

export default App;
