import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";

const Summary = () => {

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState();

    useEffect(() => {
        summary && setResumeInfo({
            ...resumeInfo,
            summary: summary
        })
    }, [summary])

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-4 border-t-primary mt-10">
            <h2 className="font-bold text-lg">Summary</h2>
            <p>Add summary for your job title. </p>

            <div className="mt-7">
                <div className="flex justify-between items-center">
                    <label>Add Summary</label>
                    <Button variant="outline" size="sm" className="border-primary text-primary">Generate from AI</Button>
                </div>
                <Textarea className="mt-5" onChange={(e) => setSummary(e.target.value)} />
            </div>
        </div>
    );
};

export default Summary;
