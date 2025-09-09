import "./App.css";
import Nav from "./components/nav";
import { Route, Routes, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectNotFound from "./pages/ProjectNotFound";
import Servers from "./pages/Servers";

function App() {
	return (
		<>
			<Routes>
				<Route element={<RootLayout />}>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/projects/:projectName" element={<ProjectDetails />} />
					<Route path="/not-found" element={<ProjectNotFound />} />
					<Route path="/minecraft" element={<Servers />} />
					<Route path="/games" element={<Games />} />
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

const Games = () => {
	return (
		<div style={{ width: "800px", height: "600px" }}>
			<iframe
				src="/games/particles/Particles.html"
				width="100%"
				height="100%"
				allowFullScreen
				title="My Game"
			/>
		</div>
	);
};
