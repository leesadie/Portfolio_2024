'use client';

import { useRouter } from "next/navigation";
import Image from "next/image";
import AccentButton from "./AccentButton";

const HeroSm = () => {
    const router = useRouter();

    return (
        <div className="
            flex
            flex-col
            gap-5
            mt-10
            items-center
            justify-center
            px-8
            text-neutral-900
        "
        >
            <div
                className="
                    items-center
                    w-full
                    h-72
                    bg-gray-200
                    rounded-md
                    group
                    relative
                    hover:bg-gray-300
                    transition
                "
                onClick={() => router.push('/tir')}
            >
                <div
                    className="
                        w-9
                        h-9
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
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/tircover5.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '60%', height: '60%'}}
                        className="w-full object-contain min-h-0 h-full pt-6"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5">
                    <div 
                        className="
                            text-xs 
                            text-neutral-900
                            outline
                            outline-[1px]
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[75px]
                        "
                    >
                        Research
                    </div>
                    <div className="text-base text-neutral-900 pt-1">
                        Time in Range Data Analysis
                    </div>
                </div>
            </div>
            <div
                className="
                    items-center
                    w-full
                    h-72
                    bg-gray-200
                    rounded-md
                    group
                    relative
                    hover:bg-gray-300
                    transition
                "
                onClick={() => router.push('/mint')}
            >
                <div
                    className="
                        w-9
                        h-9
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
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/cnncover4.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '62%', height: '62%'}}
                        className="w-full object-contain min-h-0 h-full pt-6"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5">
                    <div 
                        className="
                            text-xs 
                            text-neutral-900
                            outline
                            outline-[1px]
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[60px]
                        "
                    >
                        Project
                    </div>
                    <div className="text-base text-neutral-900 pt-1">
                        Brain Tumor Classification
                    </div>
                </div>
            </div>
            <div
                className="
                    items-center
                    w-full
                    h-72
                    bg-gray-200
                    rounded-md
                    group
                    relative
                    hover:bg-gray-300
                    transition
                "
                onClick={() => router.push('/forestar')}
            >
                <div
                    className="
                        w-9
                        h-9
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
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/forestarcover3.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '50%', height: '50%'}}
                        className="w-full object-contain min-h-0 h-full pt-6"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5">
                    <div 
                        className="
                            text-xs 
                            text-neutral-900
                            outline
                            outline-[1px]
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[75px]
                        "
                    >
                        Research
                    </div>
                    <div className="text-base text-neutral-900 pt-1">
                        Forestar Web App
                    </div>
                </div>
            </div>
            <div
                className="
                    items-center
                    w-full
                    h-72
                    bg-gray-200
                    rounded-md
                    group
                    relative
                    hover:bg-gray-300
                    transition
                "
                onClick={() => router.push('/ntda')}
            >
                <div
                    className="
                        w-9
                        h-9
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
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/ntdacover2.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '60%', height: '60%'}}
                        className="w-full object-contain min-h-0 h-full pt-6"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5">
                    <div 
                        className="
                            text-xs 
                            text-neutral-900
                            outline
                            outline-[1px]
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[60px]
                        "
                    >
                        Project
                    </div>
                    <div className="text-base text-neutral-900 pt-1">
                        fMRI Network Analysis
                    </div>
                </div>
            </div>
            <div
                className="
                    items-center
                    w-full
                    h-72
                    bg-gray-200
                    rounded-md
                    group
                    relative
                    hover:bg-gray-300
                    transition
                "
                onClick={() => router.push('/reachout')}
            >
                <div
                    className="
                        w-9
                        h-9
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
                            width={18}
                            height={18}
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <Image 
                        src='/images/reachoutcover3.svg'
                        alt="evaluation"
                        width={100}
                        height={100}
                        style={{ width: '64%', height: '64%'}}
                        className="w-full object-contain min-h-0 h-full pt-6"
                    />
                </div>
                <div className="flex flex-col ml-5 mb-5">
                    <div 
                        className="
                            text-xs 
                            text-neutral-900
                            outline
                            outline-[1px]
                            outline-neutral-900
                            rounded-full
                            py-1
                            px-3
                            w-[75px]
                        "
                    >
                        Research
                    </div>
                    <div className="text-base text-neutral-900 pt-1">
                        T1D Reachout Mobile App
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSm;