'use client';

import Image from "next/image";

const ForestarBody = () => {
    return (
        <div className="flex flex-col mt-12 items-center mx-8">
            <div className="h-fit lg:w-5/6 w-full rounded-md bg-gray-100">
                <div className="flex items-end justify-center">
                    <Image 
                        src='/images/forestarhero.svg'
                        alt="minthero"
                        width={100}
                        height={100}
                        className="object-cover pt-8"
                        style={{ width: '30%', height: '30%'}}
                    />
                </div>
            </div>
            <div className="text-xl text-neutral-900 pt-8 hidden lg:block">
                Forestar is an extension of a 2022 UBC Faculty of Forestry clinical trial that studied the health merits
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                of forest bathing (森林浴), during which participants faced challenges with mobility, transportation,
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                illness, and/or guidance. This web app that provides self-guided forest bathing aims to mitigate 
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                some of these challenges and increase accessibility to the practice. 
            </div>
            <div className="lg:hidden text-base text-neutral-900 pt-8">
                Forestar is an extension of a 2022 UBC Faculty of Forestry clinical trial that studied the merits of
                forest bathing (森林浴), during which participants faced challenges with mobility, transportation, 
                illness, and/or guidance. This web app that provides self-guided forest bathing aims to mitigate some
                of these challenges and increase accessibility.
            </div>
            <div className="lg:grid lg:grid-cols-2 flex flex-col gap-10 mt-20 items-center justify-center">
                <div className="w-fit h-fit rounded-sm bg-gray-100 px-4 pb-4">
                    <div className="flex items-start justify-center">
                        <Image 
                            src='/images/forestar1.svg'
                            alt="devices"
                            width={100}
                            height={100}
                            style={{ width: '30%', height: '30%'}}
                        />
                    </div>
                    <div className="lg:text-base text-neutral-900 pt-6 text-sm">
                        Questions that arose during development included:
                    </div>
                    <div className="lg:text-base text-sm text-neutral-900">
                        How can we build an app to reduce distractions?
                    </div>
                    <div className="lg:text-base text-sm text-neutral-900">
                        How can other media be used to help induce focus on the experience?
                    </div>
                </div>
                <div className="w-fit h-fit rounded-sm bg-gray-200 px-4 pb-4">
                    <div className="flex items-start justify-center">
                        <Image 
                            src='/images/forestar3.svg'
                            alt="devices"
                            width={100}
                            height={100}
                            style={{ width: '37%', height: '37%'}}
                        />
                    </div>
                    <div className="text-base text-neutral-900 pt-6 hidden lg:block">
                        We used self-report scales of stress and emotional states to measure any changes that may
                    </div>
                    <div className="text-base text-neutral-900 hidden lg:block">
                        have occurred while forest bathing as the practice has been found to improve overall wellbeing. 
                        Users would be able to view their stats and trends over time.
                    </div>
                    <div className="lg:hidden text-sm text-neutral-900 pt-6">
                        We used self-report scales of stress and emotional states to measure any changes that may have
                        occurred while forest bathing as it has been found to improve overall wellbeing. Users would be
                        able to view their stats and trends over time within their account profile.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForestarBody;