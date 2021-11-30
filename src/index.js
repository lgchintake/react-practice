import React from 'react'
import ReactDOM from 'react-dom';

import WelcomeComponent from "./components/welcome";
import SecondComponent from './components/second-component';

ReactDOM.render(
    <React.StrictMode>
        <WelcomeComponent />
        <SecondComponent />
    </React.StrictMode>, 
    document.getElementById("root")
)