'use client';

import AccentButton from "../AccentButton";

const ReachoutHeader = () => {
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
                        T1D Reachout
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
                    BC Children's Hospital Research Institute
            </div>
            <div className="flex flex-row gap-2 pt-5 lg:text-base text-xs">
                    <AccentButton 
                        label="Research"
                    />
                    <AccentButton 
                        label="Technical writing"
                        outline
                    />
                    <AccentButton 
                        label="Human-centered design"
                        outline
                    />
                </div>
                <div className="flex flex-row gap-2 pt-2 lg:text-base text-xs">
                    <AccentButton 
                        label="Participatory design"
                        outline
                    />
                    <AccentButton 
                        label="Social network intervention"
                        outline
                    />
            </div>
        </div>
    );
}

export default ReachoutHeader;