import React from 'react';
import ReactDom from 'react-dom';

import Home from './components/home';

var name = "Aashish";

ReactDom.render(
    <React.StrictMode>
        <Home name={name} />
    </React.StrictMode>,
    document.getElementById("root")
)