'use client';

const Lab = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 mt-12 lg:ml-20 mx-8">
            <div className="lg:text-2xl text-neutral-900">
                Creative coding
            </div>
            <div className="grid grid-cols-2 gap-5">
                <div className="w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/coordinates.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/flow.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs text-neutral-600 lg:text-base">
                    Spherical coordinates - p5.js
                </div>
                <div className="text-xs text-neutral-600 lg:text-base">
                    Flow fields - p5.js
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-3 hidden gap-5 mt-5">
                <div className="w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover hidden lg:block"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/loading.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover hidden lg:block"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/typography.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover hidden lg:block"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/generative.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs lg:text-base text-neutral-600 hidden lg:block">
                    Animation - Processing
                </div>
                <div className="text-xs lg:text-base text-neutral-600 hidden lg:block">
                    Typography - Processing
                </div>
                <div className="text-xs lg:text-base text-neutral-600 hidden lg:block">
                    Generative - Processing
                </div>
            </div>
            <div className="lg:text-2xl text-neutral-900 mt-10">
                Airbnb clone
            </div>
            <div className="flex flex-col gap-3">
                <div className="w-full lg:h-full rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/airbnb.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="text-xs lg:text-base text-neutral-600">
                    NextJS 13, TypeScript, MongoDB, Prisma, NextAuth, Tailwind - Followed a tutorial from @codewithantonio on YouTube to teach myself basic frontend and backend
                    for the Forestar project.
                </div>
            </div>
            <div className="lg:text-2xl text-base text-neutral-900 mt-10">
                Topological Data Analysis for Interpretability of 3D-CNNs
            </div>
            <div className="flex flex-col bg-gray-200 rounded-md w-full">
                <div className="text-neutral-900 lg:text-lg text-sm mt-5 pl-5 lg:pr-0 pr-3">
                    Proposed the usage and application of topological data analysis to improve the interpretability of 3-dimensional convolutional neural networks.
                </div>
                <div className="text-neutral-900 lg:text-lg text-sm pl-5">
                    Accepted by the 2024 Association for the Advancement of Artificial Intelligence (AAAI) Undergraduate Consortium.
                </div>
                <div className="text-neutral-600 mt-3 pl-5 pb-5 lg:text-base text-sm">
                    <a
                        target='_blank'
                        rel='noopener noreferrer'
                        href='files/Lee_Research Statement_AAAI.pdf'
                    >
                        <button
                            onClick={() => {}}
                            className="underline underline-offset-2 cursor-pointer hover:opacity-50"
                        >
                            Read here
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Lab;