import { Provider } from "entities";
import { API_URL } from "../../../constants";
import { authHeaders } from "helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import FormCreateProvider from "./_components/FormCreateProvider";
import CreateProviderButton from "./_components/CreateProviderButton";

const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ... (await authHeaders()),
        },
        next: {
            tags: ["dashboard:providers"],
        }
    })
    const providers : Provider[] = await response.json();

    return (
        <div className="flex flex-grow-0 items-center flex-col items-end w-full px-10">
            <div className="flex flex-wrap w-full py-10 flex-grow-0 gap-10 px-10">
                {providers.map((provider: Provider) => (
                    <Link 
                        href={{pathname: `/dashboard/providers/${provider.providerId}`}} 
                        key={provider.providerId}
                    >
                        <ProviderCard provider={provider} key={provider.providerId} />
                    </Link>
                ))}
            </div>
            <CreateProviderButton>
                <FormCreateProvider/>
            </CreateProviderButton>
        </div>
    )
}
export default ProviderPage;