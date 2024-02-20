'use client';

import Container from "../components/Container";
import ReachoutHeader from "../components/reachout/ReachoutHeader";
import ReachoutBody from "../components/reachout/ReachoutBody";

const ReachoutClient = () => {
    return (
        <Container>
            <ReachoutHeader />
            <ReachoutBody />
        </Container>
    );
}

export default ReachoutClient;