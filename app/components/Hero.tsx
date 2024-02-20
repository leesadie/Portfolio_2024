'use client';

import { font_light } from "../fonts";

const Hero = () => {

    return (
        <div
            className="
                flex
                flex-col
                items-center
            "
        >
            <div
                className="
                    lg:text-4xl
                    lg:pt-5
                    text-2xl
                    text-neutral-900
                    leading-relaxed
                "
            >
                <div>
                    Hello, I'm Sadie
                </div>
            </div>
            <div
                className="
                    lg:pt-4
                    pt-4
                    lg:text-lg
                    text-base
                    text-neutral-900
                "
            >
                <div className={`md:block hidden`}>
                    Studying Cognitive Science & Data Science with interests in the
                </div>
                <div className={`md:block hidden`}>
                    application of data, computation, and software in research.
                </div>
                <div className={`md:hidden px-10 ${font_light.className}`}>
                    Studying Cognitive Science & Data Science with interests in the application of data, computation, and software in research.
                </div> 
            </div>
        </div>
    );
}

export default Hero;