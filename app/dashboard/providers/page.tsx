import { Provider } from "entities";
import { API_URL } from "../../../constants";
import { authHeaders } from "helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";

const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ... (await authHeaders()),
        }
    })
    const providers : Provider[] = await response.json();

    return (
        <div>
            {providers.map((provider: Provider) => (
                <Link href={{pathname: `/dashboard/providers/${provider.providerId}`}} key={provider.providerId}>
                <ProviderCard provider={provider} key={provider.providerId} />
                </Link>
            ))}
        </div>
    )
}
export default ProviderPage;