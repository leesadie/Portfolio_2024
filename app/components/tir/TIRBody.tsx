'use client';

import Image from "next/image";

const TIRBody = () => {
    return (
        <div className="flex flex-col mt-12 items-center mx-8">
            <div className="h-fit w-fit rounded-md bg-gray-100">
                <Image 
                    src='/images/tirhero2.svg'
                    alt="tirhero"
                    width={100}
                    height={100}
                    className="object-cover p-5"
                    style={{ width: '100%', height: '80%'}}
                />
            </div>
            <div className="text-xl text-neutral-900 pt-8 hidden lg:block">
                A secondary outcome for the T1D Reachout clinical trial, Time in Range (TIR)
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                refers to the time spent by the participant within the 3.9-10.0 mmol/L
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                glucose range, which is indicative of good glycemic control.
            </div>
            <div className="lg:hidden text-sm text-neutral-900 pt-5">
                A secondary outcome for the T1D Reachout clinical trial, Time in Range (TIR) refers to the time spent by the participant within the 3.9-10.0 mmol/L glucose range, which is indicative of good glycemic control.
            </div>
            <div className="text-sm lg:text-base text-neutral-600 pt-2">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie/tir_collection">
                    <button
                        onClick={() => {}}
                        className="underline underline-offset-2 hover:opacity-50"
                    >
                        Github repo
                    </button>
                </a>
            </div>
            <div className="lg:grid lg:grid-cols-2 flex flex-col gap-10 mt-20">
                <div className="w-fit h-fit rounded-sm bg-gray-100 p-4">
                    <Image 
                        src='/images/devices.svg'
                        alt="devices"
                        width={100}
                        height={100}
                        style={{ width: '98%', height: '98%'}}
                    />
                    <div className="text-sm lg:text-base text-neutral-900 pt-4">
                        Devices used: Dexcom G6, Dexcom G7, and Freestyle Libre 2.
                    </div>
                    <div className="text-base text-neutral-900 hidden lg:block">
                        We connect participant accounts to our study account to collect
                    </div>
                    <div className="text-base text-neutral-900 hidden lg:block">
                        data from Dexcom Clarity and LibreView.
                    </div>
                    <div className="lg:hidden text-sm text-neutral-900">
                        We connect participant accounts to our study account to collect data from Dexcom Clarity and LibreView.
                    </div>
                </div>
                <div className="w-fit h-fit rounded-sm bg-gray-100 p-4">
                    <div className="flex items-center justify-center">
                        <Image 
                            src='/images/tirgraph.svg'
                            alt="devices"
                            width={100}
                            height={100}
                            style={{ width: '45%', height: '45%'}}
                        />
                    </div>
                    <div className="text-base text-neutral-900 pt-4 hidden lg:block">
                        In addition to calculating Time in Range, we also calculate time
                    </div>
                    <div className="text-base text-neutral-900 hidden lg:block">
                        spent in the very high range, high range, low range, and very low
                    </div>
                    <div className="text-base text-neutral-900 hidden lg:block">
                        range, as well as a participant's Glucose Management Indicator
                    </div>
                    <div className="lg:hidden text-sm text-neutral-900 pt-4">
                        In addition to calculating Time in Range, we also calculate time spent in the very high range, high range, low range, and very low range, as well as a participant's Glucose Management Indicator.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TIRBody;