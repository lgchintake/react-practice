import React from 'react';

class Welcome extends React.Component {
    render() {
        var myName = "Laxminarayan";
        function getCurrentTime() {
            return new Date().toTimeString();
        }
        var fruits = ['Banana', 'Apple', 'Chiku', 'Mango', 'PineApple', 'Orange', 'Grapes'];
        var serverClass = "green";
        return (
            <div className="welcome-class">
                <h1>Welcome Component, {myName}</h1>
                <label>Today's date: </label> <span className={serverClass}>{getCurrentTime()}</span> <br />
                <label>addition: </label> <span>{20 + 10}</span>
                {
                    fruits.map((fruit, index) => {
                        return (<div key={index} className={"fruit-div " + (index % 2 == 0 ? "red" : "green")}>{fruit} - {index}</div>)
                    })
                }
            </div>
        )
    }
}

export default Welcome;