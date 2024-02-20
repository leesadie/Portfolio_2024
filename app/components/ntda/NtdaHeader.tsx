'use client';

import AccentButton from "../AccentButton";

const NtdaHeader = () => {
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
                        fMRI Network Analysis
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
                    Personal project for interest in neuroscience and computation
            </div>
            <div className="flex flex-row gap-2 pt-5 lg:text-base text-xs">
                    <AccentButton 
                        label="Project"
                    />
                    <AccentButton 
                        label="Python"
                        outline
                    />
                    <AccentButton 
                        label="NetworkX"
                        outline
                    />
                    <AccentButton 
                        label="GUDHI"
                        outline
                    />
                </div>
                <div className="flex flex-row gap-2 pt-2 lg:text-base text-xs">
                    <AccentButton 
                        label="Graph theory"
                        outline
                    />
                    <AccentButton 
                        label="Topological data analysis"
                        outline
                    />
                </div>
        </div>
    );
}

export default NtdaHeader;