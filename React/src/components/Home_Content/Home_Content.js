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
                        <h1>UCSB Food Bank</h1>
                        <p>
                            Come and find out what's in our Inventory today!
                        </p>
                        <Link to={"/inventory"}>Get Started</Link>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Home_Content
