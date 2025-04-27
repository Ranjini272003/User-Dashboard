import React from 'react'
import { useLoaderData } from 'react-router-dom'

const User = () => {
    const userDetail = useLoaderData();
    return (
        <div className='us'>
            <h4>Name: {userDetail.name}</h4>
            <p>Email: {userDetail.email}</p>
            <p>Address: {userDetail.address.street}</p>
            <p>City: {userDetail.address.city}</p>
            <p>Zipcode: {userDetail.address.zipcode}</p>
            <p>Phone: {userDetail.phone}</p>
            <p>Website: {userDetail.website}</p>
        </div>
    )
}

export default User