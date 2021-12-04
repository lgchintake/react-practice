import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    btnClick(e) {
        console.log("you have clicked on button");
        console.log(e.target.outerText);
    }

    changeEvent = (e) => {
        console.log(e.target.value);
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <input type="text" name="firstName" onChange={e => { this.changeEvent(e)}} />
                <button onClick={e => { this.btnClick(e) }}>Click</button>
            </div>
        );
    }
}

export default Home;