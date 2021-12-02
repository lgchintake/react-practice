import React from 'react'
import ReactDOM from 'react-dom';

import Employee from './components/employee';

const empId = "5";
const name = "Laxminarayan Chintake";
const mo = "9175324567";

ReactDOM.render(
    <React.StrictMode>
        <Employee
            empId={empId}
            empName={name}
            empMo={mo}
            address={[{"adr": "address1"}, {"adr": "address2"}, {"adr": "address3"}]} />
    </React.StrictMode>,
    document.getElementById("root")
)