import React from 'react'

const EducationalPreview = ({ resumeInfo }) => {
    return (
        <div className='my-6'>
            <h2 className='text-center text-sm font-bold mb-2' style={{ color: resumeInfo?.themeColor }}>Education</h2>


            <hr style={{
                borderColor: resumeInfo?.themeColor
            }} />

            {resumeInfo?.education?.map((edu, idx) => (
                <div key={idx} className='my-5'>
                    <h2 className='text-sm font-bold' style={{color: resumeInfo?.themeColor}}>{edu?.instituteName}</h2>
                    <h2 className='text-xs flex justify-between'>{edu?.degree}
                        <span>{edu?.startDate} - {edu?.currentlyPursuing ? "Pursuing" : edu?.endDate}</span>
                    </h2>
                    <p className='text-xs my-2'>{edu?.description}</p>

                </div>
            ))}
        </div>
    )
}

export default EducationalPreview
