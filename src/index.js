import React from 'react'
import ReactDOM from 'react-dom';
import SecondComponent from './components/second-component';

import WelcomeComponent from "./components/welcome";

ReactDOM.render(
    <React.StrictMode>
        <WelcomeComponent />
        <SecondComponent />
    </React.StrictMode>, 
    document.getElementById("root")
)