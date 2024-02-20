'use client';

import Image from "next/image";
import Container from "../components/Container";

const AboutClient = () => {
    return (
        <Container>
            <div
                className="
                    flex
                    flex-col
                    lg:gap-5
                    items-center
                    justify-center
                "
            >
                <div
                    className="flex items-center justify-center mt-10"
                >
                    <Image 
                        src='/images/pfp.svg'
                        alt="pfp"
                        width={120}
                        height={120}
                        className="contrast-75"
                    />
                </div>
                <div
                    className="
                        text-neutral-900
                        lg:text-3xl
                        pt-5
                    "
                >
                    Here's more about me.
                </div>
                <div className="lg:grid lg:grid-cols-7 flex flex-col gap-4 mt-10">
                    <div
                    className="
                        bg-gray-100
                        col-span-3 
                        rounded-sm  
                        group
                        relative
                    "
                >
                    <div
                        className="
                            absolute
                            top-0
                            right-0
                            mr-4
                            mt-4
                        "
                    >
                        <Image 
                            src='/images/ubcbcchr.svg'
                            alt="logo"
                            height={100}
                            width={100}
                        />
                    </div>
                    <div className="text-neutral-500 pl-4 pt-4 text-sm lg:text-base">
                        Major
                    </div>
                    <div className="text-neutral-900 pl-4 text-sm lg:text-base">
                        Cognitive Systems
                    </div>
                    <div className="text-neutral-500 pl-4 pt-4 text-sm lg:text-base">
                        Minor
                    </div>
                    <div className="text-neutral-900 pl-4 text-sm lg:text-base">
                        Data Science
                    </div>
                    <div className="text-neutral-500 pl-4 pt-4 text-sm lg:text-base">
                        University
                    </div>
                    <div className="text-neutral-900 pl-4 text-sm lg:text-base">
                        University of British Columbia
                    </div>
                    <div className="text-neutral-500 pl-4 pt-4 text-sm lg:text-base">
                        Current Position
                    </div>
                    <div className="text-neutral-900 pl-4 text-sm lg:text-base">
                        Research Assistant @
                    </div>
                    <div className="text-neutral-900 pl-4 pb-4 pr-8 lg:pr-0 text-sm lg:text-base">
                        BC Children's Hospital Research Institute
                    </div>
                </div>
                <div
                    className="
                        relative
                        col-span-2
                        col-start-4
                        rounded-sm
                        overflow-hidden
                        lg:block
                        hidden
                    "
                >
                    <Image 
                        src='/images/about2.svg'
                        alt="pic"
                        fill
                        className="object-cover"
                    />
                </div>
                <div
                    className="
                        relative 
                        outline
                        outline-gray-300
                        outline-[2px]
                        col-span-2 
                        col-start-6
                        rounded-sm
                        group
                        pb-4
                        lg:pb-0
                    "
                >
                    <div className="flex flex-col pr-14">
                        <div className="text-neutral-600 pl-4 pt-4 text-sm lg:text-base">
                            Professional Interests
                        </div>
                        <div className="pl-4 pt-3">
                            <div 
                                className="
                                    text-xs
                                    lg:text-sm 
                                    text-neutral-900
                                    outline
                                    outline-neutral-900
                                    outline-[1px]
                                    rounded-full
                                    py-1
                                    px-3
                                    lg:w-[105px]
                                    w-[95px]
                                "
                            >
                                Digital health
                            </div>
                        </div>
                        <div className="pl-4 pt-3">
                            <div 
                                className="
                                    text-xs
                                    lg:text-sm
                                    text-neutral-900
                                    outline
                                    outline-neutral-900
                                    outline-[1px]
                                    rounded-full
                                    py-1
                                    px-3
                                    lg:w-[155px]
                                    w-[140px]
                                "
                            >
                                Medical data analysis
                            </div>
                        </div>
                        <div className="pl-4 pt-3 pr-4">
                            <div 
                                className="
                                    text-xs
                                    lg:text-sm
                                    text-neutral-900
                                    outline
                                    outline-neutral-900
                                    outline-[1px]
                                    rounded-full
                                    py-1
                                    px-3
                                    lg:w-[200px]
                                "
                            >
                                Computational neuroscience
                            </div>
                        </div>
                        <div className="pl-4 pt-3">
                            <div 
                                className="
                                    text-xs
                                    lg:text-sm 
                                    text-neutral-900
                                    outline
                                    outline-neutral-900
                                    outline-[1px]
                                    rounded-full
                                    py-1
                                    px-3
                                    lg:w-[175px]
                                    w-[160px]
                                "
                            >
                                Machine & deep learning
                            </div>
                        </div>
                        <div className="pl-4 pt-3">
                            <div 
                                className="
                                    text-xs
                                    lg:text-sm 
                                    text-neutral-900
                                    outline
                                    outline-neutral-900
                                    outline-[1px]
                                    rounded-full
                                    py-1
                                    px-3
                                    lg:w-[165px]
                                    w-[150px]
                                "
                            >
                                Software development
                            </div>
                        </div>
                        <div className="pl-4 pt-3">
                            <div 
                                className="
                                    text-xs
                                    lg:text-sm
                                    text-neutral-900
                                    outline
                                    outline-neutral-900
                                    outline-[1px]
                                    rounded-full
                                    py-1
                                    px-3
                                    lg:w-[130px]
                                    w-[120px]
                                "
                            >
                                Network analysis
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div className="text-neutral-900 text-2xl mt-10 hidden lg:block">
                    Outside of school and work, I enjoy dancing and teaching ballet, reading, traveling,
                    <br />
                    photography, and learning new things.
                </div>
                <div className="text-neutral-900 text-base lg:hidden pt-10 px-16">
                    Outside of school and work, I enjoy dancing and teaching ballet, reading, traveling, photography, and learning new things.
                </div>
            </div>
        </Container>
    );
}

export default AboutClient;