// import "./App.css";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Noteworthy from "./components/Projects/Noteworthy";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <Profile></Profile>
      <Projects></Projects>
      <Noteworthy></Noteworthy>
      <Contact></Contact>
    </>
  );
}

export default App;
