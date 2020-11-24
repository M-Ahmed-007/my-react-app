import React from 'react';
import Sjsondata from './Sjsondata';
import Card from './Card';

const Service=()=> {
    return(
        <>
            <div className="text-center my-5 text-capitalize">
                <h1 className="theme-color">Our Services</h1>
            </div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-10 mx-auto">

                        <div className="row gy-5">

                            {
                                Sjsondata.map((val , ind)=>{
                                    return <Card 
                                        key = {ind}
                                        imgsrcs = {val.imgsrc}
                                        titles = {val.title}
                                        texts = {val.text}
                                    />
                                })
                            }

                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;