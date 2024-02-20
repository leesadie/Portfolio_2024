'use client';

import AccentButton from "../AccentButton";

const TIRHeader = () => {
    return (
        <div className="flex flex-col mx-8 items-center">
                <div
                    className="
                        lg:text-4xl
                        lg:pt-5
                        text-2xl
                        text-neutral-900
                    "
                >
                    <div>
                        Time in Range Analysis
                    </div>
                </div>
                <div
                    className="
                        pt-4
                        lg:text-lg
                        text-xs
                        text-neutral-900
                    "
                >
                    BC Children's Hospital Research Institute - T1D Reachout
                </div>
                <div className="flex flex-row gap-2 pt-5 lg:text-base text-xs">
                    <AccentButton 
                        label="Research"
                    />
                    <AccentButton 
                        label="R"
                        outline
                    />
                    <AccentButton 
                        label="Jupyter"
                        outline
                    />
                    <AccentButton 
                        label="Conda"
                        outline
                    />
                </div>
                <div className="flex flex-row gap-2 pt-2 lg:text-base text-xs">
                    <AccentButton 
                        label="Data collection"
                        outline
                    />
                    <AccentButton 
                        label="Data analysis"
                        outline
                    />
                    <AccentButton 
                        label="Data visualization"
                        outline
                    />
                </div>
            </div>
    );
}

export default TIRHeader;