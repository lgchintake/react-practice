import React from 'react';

class SecondComponent extends React.Component {
    render(){
        function getData(){
            return 6;
        }
        return (
         <div>
             <h1>Hey, this is second component!</h1>
             <span>{getData()}</span>
         </div>   
        )
    }
}

export default SecondComponent;