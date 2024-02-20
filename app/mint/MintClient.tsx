'use client';

import Container from "../components/Container";
import MintHeader from "../components/mint/MintHeader";
import MintBody from "../components/mint/MintBody";

const MintClient = () => {
    return (
        <Container>
            <MintHeader />
            <MintBody />
        </Container>
    );
}

export default MintClient;