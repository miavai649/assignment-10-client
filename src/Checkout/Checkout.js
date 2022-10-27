import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const checkOutCourse = useLoaderData()
    const { image, title, price } = checkOutCourse;
    return (
        <div className='container'>
            <h2 className='text-center mt-3'>Check Out</h2>
            <Card className='w-50 d-block mx-auto' style={{ marginTop: '300px' }} body>
                <div className='d-flex justify-content-between'>
                    <img style={{height: '50px'}} src={image} alt="" />
                    <h6 className='fw-bolder fs-5'>{title}</h6>
                    <span className='fs-6 fw-semibold'>${price}</span>
                </div>
            </Card>
        </div>
    );
};

export default Checkout;