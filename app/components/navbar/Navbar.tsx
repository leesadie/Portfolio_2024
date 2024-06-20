'use client';

import Container from "../Container";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="w-full z-10">
            <div className="pb-10 pt-5">
                <Container>
                    <div
                        className="
                            flex
                            flex-row
                            justify-end
                            xs:justify-center
                            gap-16
                            font-normal
                            lg:text-base
                            text-sm
                            pt-5
                            text-neutral-900
                            pr-5
                        "
                    >
                        <Button 
                            label="Work"
                            onClick={() => router.push('/')}
                        />
                        <Button 
                            label="About"
                            onClick={() => router.push('/about')}
                        />
                        <Button 
                            label="Lab"
                            onClick={() => router.push('/lab')}
                        />
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href='files/Sadie_Lee_Resume.pdf'
                        >
                            <Button 
                                label="Resume"
                                onClick={() => {}}
                            />
                        </a>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Navbar;
