import React from 'react'

const ExperiencePreview = ({ resumeInfo }) => {
    return (
        <div className='my-6'>
            <h2 className='text-center text-sm font-bold mb-2' style={{ color: resumeInfo?.themeColor }}>Professional Experience</h2>

            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            {resumeInfo?.experience?.map((exp, idx) => (
                <div key={idx} className='my-5'>
                    <h2 className='text-sm font-bold'>{exp?.title}</h2>
                    <h2 className='text-xs flex justify-between'>{exp?.name},{exp?.location}
                        <span>{exp?.startDate} {exp?.currentlyWorking ? "Present" : exp?.endDate}</span>
                    </h2>
                    <p className="text-xs my-2">
                        {exp?.description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default ExperiencePreview
