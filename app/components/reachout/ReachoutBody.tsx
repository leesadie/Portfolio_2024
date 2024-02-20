'use client';

import Image from "next/image";

const ReachoutBody = () => {
    return (
        <div className="flex flex-col mt-12 items-center mx-8">
            <div className="h-fit w-fit rounded-md bg-gray-100">
                <Image 
                    src='/images/reachouthero.svg'
                    alt="reachouthero"
                    width={100}
                    height={100}
                    className="object-cover p-5"
                    style={{ width: '100%', height: '80%'}}
                />
            </div>
            <div className="text-xl text-neutral-900 pt-8 hidden lg:block">
                Currently in the process of writing a paper for publication regarding the development 
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                process of the mobile app used in the T1D Reachout intervention. The process took an iterative,
            </div>
            <div className="text-xl text-neutral-900 hidden lg:block">
                co-design approach to implement novel features including self-matching peer support.
            </div>
            <div className="lg:hidden text-base text-neutral-900 pt-8">
                Currently in the process of writing a paper for publication regarding the development process of
                the mobile app used in the T1D Reachout intervention. The process took an iterative, co-design
                approach to implement novel features including self-matching peer support.
            </div>
        </div>
    );
}

export default ReachoutBody;