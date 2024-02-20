import ClientOnly from "../components/ClientOnly";
import MintClient from "./MintClient";

const MintPage = () => {
    return (
        <ClientOnly>
            <MintClient />
        </ClientOnly>
    );
}

export default MintPage;