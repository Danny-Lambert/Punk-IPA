import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';


const Dashboard = (props) => {

    return props.beers.map((beers) => {
        return(
            <>
            <Cards beers={beers} />
            </>
        )}
    )
};

export default Dashboard;