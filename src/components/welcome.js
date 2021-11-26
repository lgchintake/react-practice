import React from 'react';

class Welcome extends React.Component {
    render(){
        var myName = "Laxminarayan";
        var fruits = ['Banana', 'Apple', 'Chiku'];
        return (
         <div>
             <h1>Welcome Component, {myName}</h1>
             {fruits.map( (fruit, index) => {
                 return (<div key={index}>{fruit} - {index}</div>)
             })}
         </div>   
        )
    }
}

export default Welcome;