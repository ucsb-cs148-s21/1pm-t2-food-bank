import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home_Content.css'
import Layout from '../../pages/Layout';

import getUser from "../../utils/get-user";
import { HelpOutline } from '@material-ui/icons';

function Home_Content() {
    const user = getUser();

    return (
        <Layout user={user}>
            <div>
                <div class="landing-page">
                    <div class="page-content">

                        <h1>UCSB Food Bank</h1>

                        {user ? (<p>Hello, {user.fullName}!</p>) : (<p>Hello! Please sign in to check your Membership & Admin status!</p>)}

                        {user && 
                            (user.Membership 
                                ? (user.Admin 
                                    ? (<p>You are a staff member! Checkout the staff portal to update inventory!</p>) 
                                    : (<p>Welcome! You are a valuable member of UCSB Food Bank! Come and find out what's in our Inventory today!</p>)
                                  ) 
                                : (<p>Sorry! Based on our record, you are ineligible to checkout items at UCSB Food Bank. If you have any questions, please submit a contact form here.</p>)
                            )
                        }
                        {user && user.Membership && !user.Admin && <Link to={"/inventory"}>Get Started</Link>}
                        {user && user.Membership && user.Admin && <Link to={"/staffportal"}>Staff Portal</Link>}
                        {user && !user.Membership && <Link to={"/contactus"}>Contact Form</Link>}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home_Content
