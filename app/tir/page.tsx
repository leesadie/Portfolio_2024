import ClientOnly from "../components/ClientOnly";
import TIRClient from "./TIRClient";

const TIRPage = () => {
    return (
        <ClientOnly>
            <TIRClient />
        </ClientOnly>
    );
}

export default TIRPage;