'use client';

import Container from "../components/Container";
import TIRHeader from "../components/tir/TIRHeader";
import TIRBody from "../components/tir/TIRBody";

const TIRClient = () => {
    return (
        <Container>
            <TIRHeader />
            <TIRBody />
        </Container>
    );
}

export default TIRClient;