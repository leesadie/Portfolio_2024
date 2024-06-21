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
                    Studying Cognitive Science and Data Science at UBC with interests in
                </div>
                <div className={`md:block hidden`}>
                    machine learning and applications of data in healthcare and medicine.
                </div>
                <div className={`md:hidden px-10 ${font_light.className}`}>
                    Studying Cognitive Science and Data Science at UBC with interests in machine learning and applications of data in healthcare and medicine.
                </div> 
            </div>
        </div>
    );
}

export default Hero;
