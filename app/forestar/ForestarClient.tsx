'use client';

import Container from "../components/Container";
import ForestarHeader from "../components/forestar/ForestarHeader";
import ForestarBody from "../components/forestar/ForestarBody";

const ForestarClient = () => {
    return (
        <Container>
            <ForestarHeader />
            <ForestarBody />
        </Container>
    );
}

export default ForestarClient;