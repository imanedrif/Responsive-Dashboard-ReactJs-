import React from 'react';
import Cards from '../Cards/cards';
import Table from '../table/table';
import './mainDash.css'

const MainDash = ()=>{
    return(
        <div className="maindash">
            <h1>Dashboard</h1>
            <Cards/>
            <Table/>
        </div>
    )
}
export default MainDash