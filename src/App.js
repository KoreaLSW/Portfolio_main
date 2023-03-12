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
    );
}

export default App;
