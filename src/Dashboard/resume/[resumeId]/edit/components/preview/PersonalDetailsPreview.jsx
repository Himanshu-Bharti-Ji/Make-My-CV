import React from 'react'

const PersonalDetailsPreview = ({ resumeInfo }) => {
    return (
        <div>
            <h2 className='font-bold text-xl text-center'>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
            <h2 className='font-medium text-sm text-center'>{resumeInfo?.jobTitle}</h2>
            <h2 className='font-normal text-xs text-center'>{resumeInfo?.address}</h2>

            <div className='flex justify-between' style={{ color: resumeInfo?.themeColor }}>
                <h2>{resumeInfo?.phone}</h2>
                <h2>{resumeInfo?.email}</h2>
            </div>

            <hr className='border-[1.5px] my-2' style={{borderColor: resumeInfo?.themeColor}}/>
        </div>
    )
}

export default PersonalDetailsPreview
