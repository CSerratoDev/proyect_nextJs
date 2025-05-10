import { Button, Input } from "@heroui/react";
import updateProvider from "actions/providers/update";
import { Provider } from "entities";
import DeleteProvider from "./DeleteProvider";
import DeleteProviderButton from "./DeleteButtom";

export default function FormUpdateProvider({provider} : {provider: Provider}) {
    const {providerId} = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId)

    return (
        <form action={updateProviderWithId} className="rounded-sm flex flex-col flex-grow-0 gap-3">
            <h1 className="text-xl text-[#252525] flex justify-center"><b>Actualizar Proveedor</b></h1>
            <div className="flex flex-wrap justify-center gap-3 w-80">
                <Input defaultValue={provider.providerName} label="Nombre" placeholder="Pepsi" name="providerName"/>
                <Input defaultValue={provider.providerEmail} label="Correo" placeholder="business@pepsi.com" name="providerEmail"/>
                <Input defaultValue={provider.providerPhoneNumber} label="Numero" placeholder="4412345678" name="providerPhoneNumber"/>
                <Button className="w-1/3" variant="shadow" color="primary" type="submit">Actualizar</Button>
                    <DeleteProvider>
                        <div className="flex flex-col">        
                            <h1 className="text-[#252525] flex text-md">
                                <p>Estas seguro de eliminar {provider.providerName}?</p>
                            </h1>
                            <DeleteProviderButton providerId={providerId}/>
                        </div>
                    </DeleteProvider>
            </div>
        </form>
    )
}