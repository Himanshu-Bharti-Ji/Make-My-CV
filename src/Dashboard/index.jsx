import React from 'react'
import AddResume from './components/AddResume'

const Dashboard = () => {
    return (
        <div className='p-10 md:px-20 lg:px-32'>
            <h2 className='text-3xl font-bold'>My Resume</h2>
            <h4>
                Start Creating Your AI-Powered Resume
            </h4>
            <p>
                {/* Use our AI to create a standout resume for your next job opportunity. */}
                Use our AI to build a standout resume for your next job. Click below to get started.
            </p>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5'> 
                <AddResume />
            </div>
        </div>
    )
}

export default Dashboard
