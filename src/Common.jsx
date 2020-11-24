import React from 'react';
import { NavLink } from 'react-router-dom';

const Common =(props)=>{
    return(
        <>
            <section className="align-content-center d-flex" id="Header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">

                                <div className="col-lg-6 col-md-6 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <div className="main-txt">
                                        <h1>
                                            {props.Name} <strong className="theme-color">Conding Maina</strong>
                                        </h1>
                                        <h2>
                                            We are the full stack <strong className="theme-color">Web Developers</strong> in the World!
                                        </h2>
                                        <NavLink className="btn-theme" to={props.visit}>{props.btnName}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 order-1 order-lg-2">
                                    <div className="main-img">
                                        <img src={props.img} className="img-fluid animated" alt="header img" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Common;