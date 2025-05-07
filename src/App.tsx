import "./App.css";
import Nav from "./components/nav";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectName" element={<ProjectDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

const RootLayout = () => {
  return (
    <div className="">
      <Nav />
      <div className="text-foreground mx-auto w-[750px] max-w-full px-5 pt-28 pb-10">
        <Outlet />
      </div>
    </div>
  );
};
