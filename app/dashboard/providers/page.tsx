import { Provider } from "entities";
import { API_URL } from "../../../constants";
import { authHeaders } from "helpers/authHeaders";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import { Button } from "@heroui/button";
import { LuPlus } from "react-icons/lu";
import CreateProvider from "./_components/CreateProvider";
import FormCreateProvider from "./_components/FormCreateProvider";

const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ... (await authHeaders()),
        }
    })
    const providers : Provider[] = await response.json();

    return (
        <div className="flex flex-grow-0 items-center flex-col items-end w-full px-10">
            <div className="flex flex-wrap w-full py-10 flex-grow-0 gap-10 px-10">
                {providers.map((provider: Provider) => (
                    <Link href={{pathname: `/dashboard/providers/${provider.providerId}`}} key={provider.providerId}>
                    <ProviderCard provider={provider} key={provider.providerId} />
                    </Link>
                ))}
            </div>
            <CreateProvider>
                <FormCreateProvider/>
            </CreateProvider>
        </div>
    )
}
export default ProviderPage;