import { PlusSquare } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

const ResumeCardItem = ({ resume }) => {
    return (
        <Link to={`/dashboard/resume/${resume.resumeId}/edit`}>
            <div className='w-[240px] h-[280px] cursor-pointer border mt-10 flex items-center justify-center bg-secondary rounded-lg  transition-transform duration-300 ease-in-out transform hover:scale-105 group shadow-lg hover:shadow-xl' >
                <PlusSquare className='transition-transform duration-300 ease-in-out transform group-hover:scale-110' size={30} />
            </div>
            <h2 className='mt-1 text-center'>{resume?.title}</h2>
        </Link>
    )
}

export default ResumeCardItem
