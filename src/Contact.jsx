import React from 'react';

const Contact =()=> {
    return(
        <>
            <div className="text-center text-capitalize my-5">
                <h1 className="theme-color font-weight-bolder">Contact US</h1>
            </div>
            <div className="container mb-5">
                <div  className="col-lg-5 col-md-5 col-10 mx-auto">
                    <form>

                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">User Name:</label>
                        <input type="text" className="form-control" name="user" id="exampleFormControlInput1" placeholder="User NAme" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                        <input type="number" className="form-control" name="phone" id="exampleFormControlInput1" placeholder="Phone Number" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email:</label>
                        <input type="email" className="form-control" name="email" id="exampleFormControlInput1" placeholder="Your Eamil" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" name="msg" id="exampleFormControlTextarea1" rows="3" placeholder="Type Somthing"></textarea>
                    </div>
                    <div className="col-12">
                        <button className="btn-theme" type="submit" name="submit">Submit form</button>
                    </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;