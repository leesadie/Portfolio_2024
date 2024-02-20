'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroFinal = () => {
    
    const router = useRouter();

    return (
        <div className="grid grid-cols-5 grid-rows-7 gap-4 mt-10 mx-20">
            <div
                className="
                    bg-gray-200 
                    col-span-3 
                    row-span-2 
                    rounded-md 
                    cursor-pointer 
                    group
                    relative
                    hover:bg-gray-300
                    transition
                "
                onClick={() => router.push('/tir')}
            >
                <div
                    className="
                        w-10
                        h-10
                        rounded-md
                        absolute
                        bg-secondary
                        top-0
                        right-0
                        mr-4
                        mt-4
                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform
                    "
                >
                    <div className="flex items-center justify-center pt-2">
                        <Image 
                            src='/images/Arrow 1.svg'
                            alt="arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/tircover5.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '35%', height: '35%'}}
                        className="w-full object-contain min-h-0 h-full pt-6"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5">
                    <div 
                        className="
                            text-sm 
                            text-neutral-900
                            outline
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[85px]
                        "
                    >
                        Research
                    </div>
                    <div className="text-lg text-neutral-900 pt-2">
                        Time in Range Data Analysis
                    </div>
                </div>
            </div>
            <div
                className="
                    relative 
                    bg-gray-200 
                    row-span-2
                    col-span-2 
                    col-start-4 
                    row-start-1
                    rounded-md
                    cursor-pointer 
                    group
                    hover:bg-gray-300
                    transition
                "
                onClick={() => router.push('/mint')}
            >
                <div
                    className="
                        w-10
                        h-10
                        rounded-md
                        absolute
                        bg-secondary
                        top-0
                        right-0
                        mr-4
                        mt-4
                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform
                    "
                >
                    <div className="flex items-center justify-center pt-2">
                        <Image 
                            src='/images/Arrow 1.svg'
                            alt="arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/cnncover4.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '45%', height: '45%'}}
                        className="w-full object-contain min-h-0 h-full pt-16"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5 pt-4">
                    <div 
                        className="
                            text-sm 
                            text-neutral-900
                            outline
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[72px]
                        "
                    >
                        Project
                    </div>
                    <div className="text-lg text-neutral-900 pt-2">
                        Brain Tumor Classification
                    </div>
                </div>
            </div>
            <div
                className="
                    relative 
                    bg-gray-200 
                    row-span-3
                    col-span-5 
                    rounded-md 
                    cursor-pointer 
                    group
                    hover:bg-gray-300
                "
                onClick={() => router.push('/forestar')}
            >
                <div
                    className="
                        w-10
                        h-10
                        rounded-md
                        absolute
                        bg-secondary
                        top-0
                        right-0
                        mr-4
                        mt-4
                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform
                    "
                >
                    <div className="flex items-center justify-center pt-2">
                        <Image 
                            src='/images/Arrow 1.svg'
                            alt="arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/forestarcover3.svg'
                        alt="evaluation"
                        width={150}
                        height={100}
                        style={{ width: '27%', height: '27%'}}
                        className="w-full min-h-0 h-full pt-16"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5 pt-4">
                    <div 
                        className="
                            text-sm 
                            text-neutral-900
                            outline
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[85px]
                        "
                    >
                        Research
                    </div>
                    <div className="text-lg text-neutral-900 pt-2">
                        Forestar Web App
                    </div>
                </div>
            </div>
            <div
                className="
                    relative 
                    bg-gray-200 
                    row-span-2
                    col-span-2 
                    rounded-md 
                    cursor-pointer 
                    group
                    hover:bg-gray-300
                "
                onClick={() => router.push('/ntda')}
            >
                <div
                    className="
                        w-10
                        h-10
                        rounded-md
                        absolute
                        bg-secondary
                        top-0
                        right-0
                        mr-4
                        mt-4
                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform
                    "
                >
                    <div className="flex items-center justify-center pt-2">
                        <Image 
                            src='/images/Arrow 1.svg'
                            alt="arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/ntdacover2.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '45%', height: '45%'}}
                        className="w-full object-contain min-h-0 h-full pt-16"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5 pt-4">
                    <div 
                        className="
                            text-sm 
                            text-neutral-900
                            outline
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[72px]
                        "
                    >
                        Project
                    </div>
                    <div className="text-lg text-neutral-900 pt-2">
                        fMRI Network Analysis
                    </div>
                </div>
            </div>
            <div
                className="
                    relative 
                    bg-gray-200 
                    row-span-2
                    col-span-3 
                    rounded-md 
                    cursor-pointer 
                    group
                    hover:bg-gray-300
                "
                onClick={() => router.push('/reachout')}
            >
                <div
                    className="
                        w-10
                        h-10
                        rounded-md
                        absolute
                        bg-secondary
                        top-0
                        right-0
                        mr-4
                        mt-4
                        group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform
                    "
                >
                    <div className="flex items-center justify-center pt-2">
                        <Image 
                            src='/images/Arrow 1.svg'
                            alt="arrow"
                            width={20}
                            height={20}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/reachoutcover3.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '35%', height: '35%'}}
                        className="w-full object-contain min-h-0 h-full pt-12"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5">
                    <div 
                        className="
                            text-sm 
                            text-neutral-900
                            outline
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[85px]
                        "
                    >
                        Research
                    </div>
                    <div className="text-lg text-neutral-900 pt-2">
                        T1D Reachout Mobile App
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroFinal;