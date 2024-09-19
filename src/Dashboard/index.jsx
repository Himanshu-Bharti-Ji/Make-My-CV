import React, { useEffect, useState } from 'react'
import AddResume from './components/AddResume'
import { useUser } from '@clerk/clerk-react'
import globalApi from '../../service/globalApi';
import ResumeCardItem from './components/ResumeCardItem';

const Dashboard = () => {

    const { user } = useUser();
    const [resumeList, setResumeList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const GetResumesList = async () => {
        try {
            setIsLoading(true);
            const res = await globalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress);
            setResumeList(res?.data?.data || []);
        } catch (error) {
            console.error("Error fetching resumes:", error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            GetResumesList();
        }
    }, [user]);

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
            <div className='flex gap-6'>
                <AddResume />
                {isLoading ? (
                    <div>Loading...</div>
                ) : (
                    resumeList.length > 0 ? (
                        resumeList.map((resume, index) => (
                            <ResumeCardItem key={index} resume={resume} />
                        ))
                    ) : (
                        <p>No resumes found. Start by creating a new resume.</p>
                    )
                )}
            </div>
        </div>
    )
}

export default Dashboard
