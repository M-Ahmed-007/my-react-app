import React from 'react';
import Common from './Common';
import web from '../src/svg images/svg-2.svg'
const About =()=> {
    return(
        <>
            <Common 
                Name="We are Welcome to you in"
                img={web}
                visit="/contact"
                btnName="Contact US"
            />
        </>
    );
};

export default About;


