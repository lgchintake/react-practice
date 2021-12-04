import React from 'react';
import ReactDom from 'react-dom';

import Home from './components/home';

ReactDom.render(
    <React.StrictMode>
        <Home />
    </React.StrictMode>,
    document.getElementById("root")
)