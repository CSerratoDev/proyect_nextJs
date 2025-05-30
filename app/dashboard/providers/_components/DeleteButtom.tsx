import { Button } from "@heroui/button";
import deleteProvider from "actions/providers/delete";

export default function DeleteProviderButton({providerId}: {providerId: string}) {
    const deleteProviderById = deleteProvider.bind(null, providerId);
    return (
        <div>
            <form action={deleteProviderById}>
                <Button type="submit" color="danger">Estoy seguro</Button>
            </form>
        </div>
    )
}