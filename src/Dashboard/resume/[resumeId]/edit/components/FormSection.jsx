import React, { useState } from "react";
import PersonalDetails from "./forms/PersonalDetails";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, LayoutGrid } from "lucide-react";
import Summary from "./forms/Summary";

const FormSection = () => {
    const [activeFormIndex, setActiveFormIndex] = useState(1);
    const [enableNext, setEnableNext] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-between">
                <Button variant="outline" className="flex gap-2" size="sm">
                    <LayoutGrid /> Theme
                </Button>
                <div className="flex gap-2">
                    {activeFormIndex > 1 && (
                        <Button
                            className="flex gap-2"
                            size="sm"
                            onClick={() => setActiveFormIndex(activeFormIndex - 1)}
                        >
                            <ArrowLeft /> Back
                        </Button>
                    )}
                    <Button
                        disabled={!enableNext}
                        className="flex gap-2"
                        size="sm"
                        onClick={() => setActiveFormIndex(activeFormIndex + 1)}
                    >
                        Next <ArrowRight />
                    </Button>
                </div>
            </div>

            {/* Personal Detail */}
            {activeFormIndex === 1 ? (
                <PersonalDetails enableNext={(v) => setEnableNext(v)} />
            ) : activeFormIndex === 2 ? (
                <Summary enableNext={(v) => setEnableNext(v)} />
            ) : null}

            {/* Summary */}

            {/* Professional Experience */}

            {/* Educational Detail */}

            {/* Skills */}
        </div>
    );
};

export default FormSection;
