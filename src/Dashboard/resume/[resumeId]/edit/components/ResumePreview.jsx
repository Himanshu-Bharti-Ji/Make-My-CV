import { ResumeInfoContext } from '@/context/ResumeInfoContext'
import React, { useContext } from 'react'
import PersonalDetailsPreview from './preview/PersonalDetailsPreview'
import SummaryPreview from './preview/SummaryPreview'

const ResumePreview = () => {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext)

    return (
        <div className='shadow-lg h-full p-14 border-t-[20px]' style={{borderColor: resumeInfo?.themeColor}}>

            {/* Personal Detail */}
            <PersonalDetailsPreview resumeInfo={resumeInfo} />

            {/* Summary */}
            <SummaryPreview resumeInfo={resumeInfo} />

            {/* Professional Experience */}

            {/* Education Details */}

            {/* Skills */}

        </div>
    )
}

export default ResumePreview
