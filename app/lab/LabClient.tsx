'use client';

import Container from "../components/Container";
import Lab from "../components/lab/Lab";
import AccentButton from "../components/AccentButton";

const LabClient = () => {
    return (
        <Container>
            <div className="flex flex-col lg:gap-5 gap-3 mx-8 items-center">
                <div
                    className="
                        lg:text-4xl
                        lg:pt-5
                        text-2xl
                        text-neutral-900
                    "
                >
                    <div>
                        Lab
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
                    Experimentation, early iterations, and extras
                </div>
            </div>
            <Lab />
        </Container>
    );
}

export default LabClient;