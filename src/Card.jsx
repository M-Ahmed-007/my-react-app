import React from 'react';
import { NavLink } from 'react-router-dom';

const Card=(props)=>{
    return(
        <>
            <div className="col-lg-4 col-md-4 col-sm-6 col-10 mx-auto">
                <div className="card">
                    <img src={props.imgsrcs}className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title theme-color">{props.titles}</h5>
                        <p className="card-text text-dark">{props.texts}</p>
                        <NavLink className="btn-theme" to="/">Learn More</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Card;



