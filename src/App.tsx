import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRouter/AppRouter";
import './App.css';

function App() {

    return (
        <BrowserRouter>
            <div className="App">
                <Navbar/>
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
