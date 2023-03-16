<<<<<<< HEAD
import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Home from './component/home/Home';
import MenuBar from './component/menuBar/MenuBar';
import Project from './component/project/Project';

function App() {
    return (
        <div>
            <MenuBar />
            <Home />
            <About />
            <Project />
            <Contact />
        </div>
=======
import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import MenuBar from './components/MenuBar';

function App() {
    return (
        <>
            <MenuBar />
            <Outlet />
        </>
>>>>>>> e1608cf87dad6e182cbc038dd44a66ea03acf944
    );
}

export default App;
