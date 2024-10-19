import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import globalApi from "../../../../../../../service/globalApi";
import { toast } from "sonner";
import { LoaderCircle, Sparkles } from "lucide-react";
import { AIChatSession } from "../../../../../../../service/AiModal";

const prompt = `
Job Title: {jobTitle}.
Please provide a JSON response with exactly 3 fields for "fresher", "midLevel", and "experienced". Each field should contain:
1. "experienceLevel": One of "fresher", "midLevel", or "experienced".
2. "summary": A concise summary (within 4-5 lines) tailored to the provided job title.

The response must follow this exact structure:

{
  "fresher": {
    "experienceLevel": "fresher",
    "summary": "Your summary for a fresher level."
  },
  "midLevel": {
    "experienceLevel": "midLevel",
    "summary": "Your summary for a mid-level professional."
  },
  "experienced": {
    "experienceLevel": "experienced",
    "summary": "Your summary for an experienced professional."
  }
}
`;


const Summary = ({ enableNext }) => {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [summary, setSummary] = useState();
    const [isGenerating, setIsGenerating] = useState(false);
    const [isSaving, setIsSaving] = useState(false);
    const params = useParams();
    const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState()

    useEffect(() => {
        summary &&
            setResumeInfo({
                ...resumeInfo,
                summary: summary,
            });
    }, [summary]);

    const generateSummaryFromAi = async () => {
        setIsGenerating(true);
        const PROMPT = prompt.replace("{jobTitle}", resumeInfo?.jobTitle);

        try {
            // AI response
            const result = await AIChatSession.sendMessage(PROMPT);
            const parsedResult = JSON.parse(result.response.text());

            console.log("Parsed AI Summary:", parsedResult);

            // Set AI generated summary list directly
            setAiGeneratedSummaryList(parsedResult);
        } catch (error) {
            console.error("Error during AI summary generation:", error);
            setAiGeneratedSummaryList([]);
        } finally {
            setIsGenerating(false);
        }
    };

    console.log("aiGeneratedSummaryList", aiGeneratedSummaryList);

    const handleSummaryClick = (selectedSummary) => {
        setSummary(selectedSummary);
    };


    const onSave = async (e) => {
        e.preventDefault();
        setIsSaving(true);

        const data = {
            data: {
                summary: summary,
            },
        };

        try {
            const res = await globalApi.UpdateResumeDetails(params?.resumeId, data);
            console.log("Response from server:", res);
            enableNext(true);
            toast.success("Resume details saved successfully!", {
                description: "Your changes have been successfully saved.",
                className: "bg-green-500",
            });
        } catch (error) {
            console.error("Error updating resume:", error);
            toast.error("Failed to update resume. Please try again.", {
                description:
                    "An error occurred while updating. Please check your input.",
                className: "bg-red-500",
            });
        } finally {
            setIsSaving(false);
        }
    };

    console.log("resumeInfo", resumeInfo);


    return (
        <div>
            <div className="p-5 shadow-lg rounded-lg border-t-4 border-t-primary mt-10">
                <h2 className="font-bold text-lg">Summary</h2>
                <p>Add summary for your job title. </p>

                <form className="mt-7" onSubmit={onSave}>
                    <div className="flex justify-between items-center">
                        <label>Add Summary</label>
                        <Button
                            variant="outline"
                            type="button"
                            size="sm"
                            className="border-primary text-primary flex gap-2"
                            onClick={() => generateSummaryFromAi()}
                        >
                            {isGenerating ? <>
                                <LoaderCircle className="animate-spin" />
                                Generating...
                            </> : (
                                <>
                                    <Sparkles className="h-5 w-5" />
                                    Generate from AI
                                </>
                            )}
                        </Button>
                    </div>
                    <Textarea
                        className="mt-5"
                        required
                        rows={6}
                        defaultValue={summary}
                        onChange={(e) => setSummary(e.target.value)}
                    />
                    <div className="mt-3 flex justify-end">
                        <Button type="submit" size="sm" disabled={isSaving}>
                            {isSaving ? <LoaderCircle className="animate-spin" /> : "Save"}
                        </Button>
                    </div>
                </form>
            </div>
            {aiGeneratedSummaryList && typeof aiGeneratedSummaryList === 'object' && (
                <div>
                    <h2 className="font-bold text-lg">Suggestions</h2>
                    {Object.entries(aiGeneratedSummaryList).map(([level, { summary }], idx) => (
                        <div key={idx} className="my-2">
                            <h2 className="font-bold my-1">Level: {level}</h2>
                            <p onClick={() => handleSummaryClick(summary)}
                                className="cursor-pointer hover:underline">{summary}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>


    );
};

export default Summary;
