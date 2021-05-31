import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home_Content.css'
import Layout from '../../pages/Layout';

import getUser from "../../utils/get-user";

function Home_Content() {
    const user = getUser();

    return (
        <Layout user={user}>
            <div>
                <div class="landing-page">
                    <div class="page-content">
                        <div className="Jambotron">

                            <h1>UCSB Food Bank</h1>

                            {user ? (<p>Hello, {user.fullName}!</p>) : (<p>Hello! Please sign in to check your Membership & Admin status! </p>)}

                            {/* <p>Role status: 
                            {user && user.Membership && !user.Admin && " Member"}
                            {user && user.Membership && user.Admin && " Staff"}
                            {user && !user.Membership && " Visitor"}
                            </p> */}

                            {user && 
                                (user.Membership 
                                    ? (user.Admin 
                                        ? (<p>Welcome! You are a staff member! <br /> Checkout the staff portal to update inventory!</p>) 
                                        : (<p>Welcome! You are a valuable member of food bank! <br /> Come and find out what's in the inventory today!</p>)
                                    ) 
                                    : (<p>Sorry! You are ineligible to checkout items at food bank. <br /> If you have any questions, please submit a contact form below.</p>)
                                )
                            }

                            {user && user.Membership && !user.Admin && <Link to={"/inventory"}>Get Started</Link>}
                            {user && user.Membership && user.Admin && <Link to={"/staffportal"}>Staff Portal</Link>}
                            {user && !user.Membership && <Link to={"/contactus"}>Contact Form</Link>}
                            {!user && <p2>Hours: WEDNESDAYS 10AM-2PM <br /> FRIDAYS 9AM-1PM <br /> <br />
                                Location: UCEN, ENTRANCE FROM ORTEGA SIDE</p2>}
                            
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home_Content
