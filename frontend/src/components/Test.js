import React, {Component} from 'react';

function Test1 () {
        console.log("Test1 compo")

        const procDate = () => {
            const tme = "11:30"
            const d = new Date(0,0,0,tme);
            console.log((d.getHours() * 3600) + (d.getMinutes() * 60));
        }

        return (
            <>
                {procDate()}
                <p>test</p>
            </>
        );



}

export default Test1;