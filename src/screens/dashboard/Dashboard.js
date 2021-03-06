import React from "react";
import * as ReactBootStrap from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const Dashboard =() => {

    const players =[
        {position: "Forward", name:"Lebron", team:"Lakers"},
        {position: "Guard", name:"Russel Westbreaker", team:"Rockets"},
        {position: "Guard", name:"James Lebron", team:"Rockers"},
        {position: "Forward", name:"Luca Donick", team:"Mavricks"}
    ];

    const renderPlayer = (players, index) => {
        return(
            <tr key={index}>
                <td>{players.name}</td>
                <td>{players.position}</td>
                <td>{players.team}</td>
            </tr>
        )
    }

    return(
    <div>
            <ReactBootStrap.Table striped bordered hover>
                <thead>
                    <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Team</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(renderPlayer)}
                    
                </tbody>
            </ReactBootStrap.Table>
            <Link to="/dashboard2">Another dashboard</Link>
    </div>
    );
}
export default Dashboard;