import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'

const PersonalDetails = () => {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

    return (
        <div>
            PersonalDetails
        </div>
    )
}

export default PersonalDetails
