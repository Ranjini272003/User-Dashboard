import React from 'react'
import { Outlet } from 'react-router-dom'
import UserProfile from './UserProfile'

const UserLayout = () => {
    return (


        <div className='cont'>
            <div className='h1main'>
                <h1>List of Users</h1>
            </div>
            {/* <UserProfile/> */}
            <div className='details'>
                <Outlet />
            </div>
        </div>

    )
}

export default UserLayout