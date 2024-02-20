'use client';

import Container from "../components/Container";
import NtdaHeader from "../components/ntda/NtdaHeader";
import NtdaBody from "../components/ntda/NtdaBody";

const NtdaClient = () => {
    return (
        <Container>
            <NtdaHeader />
            <NtdaBody />
        </Container>
    );
}

export default NtdaClient;