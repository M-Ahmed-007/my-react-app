import React from 'react';
import Common from './Common';
import web from '../src/svg images/svg-1.svg';

const Home =()=> {
    return(
        <>
            <Common 
                Name="Grow Your Business with"
                img={web}
                visit="/service"
                btnName="Get Started"
            />
        </>
    );
};

export default Home;