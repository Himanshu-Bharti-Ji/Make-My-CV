import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import globalApi from "../../../../../../../service/globalApi";
import { useState } from "react";
import { toast } from "sonner";

const PersonalDetails = ({ enableNext }) => {
    const params = useParams();

    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    const [formData, setFormData] = useState();
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        enableNext(false);
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });

        setResumeInfo({
            ...resumeInfo,
            [name]: value,
        });
    };

    const onSave = async (e) => {
        e.preventDefault();
        setIsLoading(true);


        const data = { data: formData };

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
            setIsLoading(false);
        }
    };

    return (
        <div className="p-5 shadow-lg rounded-lg border-t-4 border-t-primary mt-10">
            <h2 className="font-bold text-lg">Personal Details</h2>
            <p>Get Started with the basic information</p>

            <form onSubmit={onSave}>
                <div className="grid grid-cols-2 mt-5 gap-3">
                    <div className="">
                        <label className="text-sm">First Name</label>
                        <Input
                            name="firstName"
                            type="text"
                            required
                            defaultValue={resumeInfo?.firstName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <label className="text-sm">Last Name</label>
                        <Input
                            name="lastName"
                            type="text"
                            required
                            defaultValue={resumeInfo?.lastName}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <label className="text-sm">Phone</label>
                        <Input
                            name="phone"
                            type="text"
                            required
                            defaultValue={resumeInfo?.phone}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="">
                        <label className="text-sm">Email</label>
                        <Input
                            name="email"
                            type="email"
                            required
                            defaultValue={resumeInfo?.email}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm">Job Title</label>
                        <Input
                            name="jobTitle"
                            type="text"
                            required
                            defaultValue={resumeInfo?.jobTitle}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="col-span-2">
                        <label className="text-sm">Address</label>
                        <Input
                            name="address"
                            type="text"
                            required
                            defaultValue={resumeInfo?.address}
                            onChange={handleInputChange}
                        />
                    </div>
                </div>
                <div className="mt-3 flex justify-end">
                    <Button type="submit" size="sm" disabled={isLoading}>
                        {isLoading ? <LoaderCircle className="animate-spin" /> : "Save"}
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default PersonalDetails;
