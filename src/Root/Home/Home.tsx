import React from 'react'
import { useState } from 'react';

export const Home = () => {

    let a = 3;
    a = a + 4;
    
    if (a > 3) {
        console.log(a);
    }

    const [val, setVal] = useState(3);
    setVal(val + 1);
    return (
        <React.Fragment>
            <h1>
                Home page {val}
            </h1>
        </React.Fragment>
    );
}
