'use client';

import AccentButton from "../AccentButton";

const ForestarHeader = () => {
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
                        Forestar
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
                    UBC Emerging Media Lab (EMLx)
            </div>
            <div className="flex flex-row gap-2 pt-5 lg:text-base text-xs">
                    <AccentButton 
                        label="Research"
                    />
                    <AccentButton 
                        label="TypeScript"
                        outline
                    />
                    <AccentButton 
                        label="ReactJS"
                        outline
                    />
                    <AccentButton 
                        label="MongoDB"
                        outline
                    />
                </div>
                <div className="flex flex-row gap-2 pt-2 lg:text-base text-xs">
                    <AccentButton 
                        label="Needle Engine"
                        outline
                    />
                    <AccentButton 
                        label="Augmented reality"
                        outline
                    />
                    <AccentButton 
                        label="Figma"
                        outline
                    />
                </div>
        </div>
    );
}

export default ForestarHeader;