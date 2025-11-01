// import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Noteworthy from "./components/Projects/Noteworthy";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Profile></Profile>
      <Skills></Skills>
      <Projects></Projects>
      <Noteworthy></Noteworthy>
      <Contact></Contact>
    </>
  );
}

export default App;
