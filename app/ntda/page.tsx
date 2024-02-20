import ClientOnly from "../components/ClientOnly";
import NtdaClient from "./NtdaClient";

const NtdaPage = () => {
    return (
        <ClientOnly>
            <NtdaClient />
        </ClientOnly>
    );
}

export default NtdaPage;