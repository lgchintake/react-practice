import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name
        }

        this.changeEvent = this.changeEvent.bind(this);
    }

    btnClick(e) {
        console.log(this.state);
    }

    changeEvent = (e) => {
        console.log(e.target.value);
        this.setState({ name: e.target.value });
    }

    render() {
        return (
            <div>
                <input type="text" name="firstName" onChange={e => { this.changeEvent(e) }} value={this.state.name} /> <br /><br />
                <button onClick={e => { this.btnClick(e) }}>Click</button> <br /><br />
                <span>{this.state.name}</span>
            </div>
        );
    }
}

export default Home;