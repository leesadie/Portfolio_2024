'use client';

import Container from "../Container";
import Button from "./Button";

const Footer = () => {
    return (
        <div className="w-full z-10 mt-20">
            <div className="pb-10 pt-5">
                <Container>
                    <div 
                        className="
                            flex
                            flex-row
                            items-center
                            justify-center
                            gap-16
                            lg:text-base
                            text-sm
                            pt-5
                            text-neutral-900
                        "
                    >
                        <a target="_blank" rel="noopener noreferrer" href="mailto:sadielee003@gmail.com">
                            <Button 
                                label="Email"
                                onClick={() => {}}
                            />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/leesadie/">
                            <Button 
                                label="LinkedIn"
                                onClick={() => {}}
                            />
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/leesadie">
                            <Button 
                                label="Github"
                                onClick={() => {}}
                            />
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Footer;