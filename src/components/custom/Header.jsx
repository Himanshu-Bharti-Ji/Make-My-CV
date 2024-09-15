import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/clerk-react'

const Header = () => {

    const { user, isSignedIn } = useUser();


    return (
        <div className='p-3 px-5 shadow-md flex justify-between items-center'>
            <div className="flex items-center gap-4">
                <img className='rounded-full' width={60} height={60} src="/images/makemycvlog3.png" alt="logo" />
                <h4 className='text-2xl font-bold'>Make My CV</h4>
            </div>
            {isSignedIn ?
                <div className='flex items-center gap-4'>
                    <Link to={"/dashboard"}>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <UserButton />
                </div> :
                <Link to={"/auth/sign-in"}>
                    <Button >Get Started</Button>
                </Link>
            }

        </div>
    )
}

export default Header
