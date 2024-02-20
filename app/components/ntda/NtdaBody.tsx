'use client';

import Image from "next/image";

const NtdaBody = () => {
    return (
        <div className="flex flex-col mt-12 items-center mx-8">
            <div className="h-fit lg:w-5/6 w-fit rounded-md bg-gray-100">
                <div className="flex items-center justify-center">
                    <Image 
                        src='/images/ntdahero.svg'
                        alt="minthero"
                        width={100}
                        height={100}
                        className="object-cover p-5"
                        style={{ width: '35%', height: '35%'}}
                    />
                </div>
            </div>
            <div className="text-xl text-neutral-900 pt-8 hidden lg:block">
                As I've become interested in computation and analysis in neuroscience, I worked on a
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                project to understand various concepts in network analysis such as centralities, network
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                density, and nodal strength, as well as topological data analysis with persistence barcodes and
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                Betti numbers given that an fMRI dataset is 3-dimensional with respect to space and time.
            </div>
            <div className="lg:hidden text-base text-neutral-900 pt-8">
                As I've become interested in computation and analysis in neuroscience, I worked on a project
                to understand concepts in network analysis such as centralities, network density,
                and nodal strength, as well as topological data analysis with persistence barcodes and Betti numbers, given
                that an fMRI dataset is 3-dimensional with respect to space and time.
            </div>
            <div className="lg:text-base text-sm text-neutral-600 lg:pt-2 pt-4">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/fMRI_Network_TDA">
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

export default NtdaBody;