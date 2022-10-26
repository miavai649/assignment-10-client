import React from 'react';
import { Button } from 'react-bootstrap';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Banner from '../assets/images/banner.png';
import './Home.css';

const Home = () => {
    return (
        <div style={{height: '100vh'}} className='container d-flex justify-content-lg-between align-items-center'>
            <div className='ms-5'>
                <div className='mb-2'>
                    <h1 className='mb-0'>We have everything,</h1>
                    <span className='fs-1 fw-semibold text-info'>You need to learn anything</span>
                </div>
                <div>
                    <p className='fs-5' style={{paddingRight: '100px'}}>Empower yourself with world-class courses from educator and institutions in a practical and social learning environment...</p>
                </div>
                <Button className='p-2' variant="info"><Link className='decoration-none fw-semibold text-light' to='/courses'>Go Courses <FaArrowRight></FaArrowRight></Link></Button>
            </div>
            <div>
                <img style={{height: '600px'}} src={Banner} alt="" />
            </div>
        </div>
    );
};

export default Home;