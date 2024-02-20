'use client';

import Image from "next/image";

const MintBody = () => {
    return (
        <div className="flex flex-col mt-12 items-center mx-8">
            <div className="h-fit w-fit rounded-md bg-gray-100">
                <Image 
                    src='/images/minthero.svg'
                    alt="minthero"
                    width={100}
                    height={100}
                    className="object-cover p-5"
                    style={{ width: '100%', height: '80%'}}
                />
            </div>
            <div className="text-xl text-neutral-900 pt-8 hidden lg:block">
                To better understand deep learning, I built a convolutional neural network model to classify
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                brain tumors from MRI data with four classes-glioma, meningioma, pituitary, and no tumor. 
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                Data was also explored and pre-processed prior to use in the model.
            </div>
            <div className="text-base text-neutral-900 lg:hidden pt-8">
                To better understand deep learning, I built a convolutional neural network model to classify 
                brain tumors from MRI data with four classes-glioma, meningioma, pituitary, and no tumor. 
                Data was also explored and pre-processed prior to use in the model.
            </div>
            <div className="lg:text-base text-sm text-neutral-600 pt-2">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/Brain-Tumor-Detection">
                    <button
                        onClick={() => {}}
                        className="underline underline-offset-2 hover:opacity-50"
                    >
                        Github repo
                    </button>
                </a>
            </div>
        </div>
    );
}

export default MintBody;