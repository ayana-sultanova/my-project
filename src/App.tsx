import React from 'react';
import './styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import MainPage from "./pages/MainPage";
import AboutPage from "./pages/AboutPage";
import {useTheme} from "./theme/useTheme";
import {classNames} from "./helpers/classNames/classNames";

const App = () => {

    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'} >About</Link>
            <Routes>
                <Route path={'/'} element={<MainPage/>} />
                <Route path={'/about'} element={<AboutPage/>} />
            </Routes>
        </div>
    );
};

export default App;