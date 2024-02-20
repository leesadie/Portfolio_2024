'use client';

import AccentButton from "../AccentButton";

const MintHeader = () => {
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
                        Brain Tumor Classification
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
                    UBC Multifaceted Innovations in Neurotechnology - Design Team
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
                        label="PyTorch"
                        outline
                    />
                    <AccentButton 
                        label="Conda"
                        outline
                    />
                </div>
                <div className="flex flex-row gap-2 pt-2 lg:text-base text-xs">
                    <AccentButton 
                        label="Deep learning"
                        outline
                    />
                    <AccentButton 
                        label="Convolutional neural network"
                        outline
                    />
                </div>
        </div>
    );
}

export default MintHeader;