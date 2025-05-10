import { Button, Input } from "@heroui/react";
import updateProvider from "actions/providers/update";
import { Provider } from "entities";
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteButtom";

export default function FormUpdateProvider({provider} : {provider: Provider}) {
    const {providerId} = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId)

    return (
        <form action={updateProviderWithId} className="rounded-md flex flex-col flex-grow-0 gap-3">
            <h1 className="text-2xl text-[#252525] flex justify-center p-3"><b>Actualizar Proveedor</b></h1>
            <div className="flex flex-wrap">
                <Input defaultValue={provider.providerName} label="Nombre" placeholder="Pepsi" name="providerName"/>
                <Input defaultValue={provider.providerEmail} label="Correo" placeholder="business@pepsi.com" name="providerEmail"/>
                <Input defaultValue={provider.providerPhoneNumber} label="Numero" placeholder="4412345678" name="providerPhoneNumber"/>
                <div className="flex justify-end ">
                <Button className="w-1/3" variant="shadow" color="success" type="submit">Actualizar</Button>
                </div>
                <DeleteProvider>
                    <h1 className="text-[#252525] flex justify-center text-xl">
                        Estas por eliminar a: <b>{provider.providerName}</b>. Estas seguro?
                    </h1>
                    <DeleteProviderButton providerId={providerId}/>
                </DeleteProvider>
            </div>
        </form>
    )
}