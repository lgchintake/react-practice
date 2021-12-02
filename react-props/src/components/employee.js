import React from 'react';

class Employee extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return (
            <div>
                <h1>Hello, {this.props.empName}</h1>
            </div>
        );
    }
}

export default Employee;