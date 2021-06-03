import BiodataPage from "./components/biodata";
import HomePage from "./components/home";
import ProjectsPage from "./components/projects";

export const routes = [
  { id: 0, name: "Home", component: <HomePage />, path: "/" },
  { id: 1, name: "Biodata", component: <BiodataPage />, path: "/biodata" },
  { id: 2, name: "Projects", component: <ProjectsPage />, path: "/projects" },
];
