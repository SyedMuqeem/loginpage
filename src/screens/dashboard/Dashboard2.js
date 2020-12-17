import axios from 'axios';
import React, { useState, useEffect } from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";



const Dashboard2 = () => {
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(false);
    const getPlayerData = async () => {
        try{
            const data = await axios.get(
                "https://nba-players.herokuapp.com/players-stats"
            );
            console.log(data);
            setPlayers(data.data);
            setLoading(true)
        } catch (e){
            console.log(e);
        }
    }

    const column = [
        { dataField: "name", text: "Player Name"},
        { dataField: "points_per_game", text: "Points per Game"},
        { dataField: "team_name", text: "Player Team"},
        // { dataField: "sd", text:"Index"}
    ]

    useEffect(() => {getPlayerData()},[]);

    return(
        <div className="dashboard2">
            {loading ? (
                <BootstrapTable 
                keyField="name"
                data={players}
                columns={column}
                pagination={paginationFactory()}    
            />) :(
                <ReactBootStrap.Spinner animation="border"/>
            )}
            
        </div>
    )
}
export default Dashboard2;
