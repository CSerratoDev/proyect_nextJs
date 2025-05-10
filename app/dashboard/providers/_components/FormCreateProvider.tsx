import { Button, Input } from "@heroui/react";
import createProvider from "actions/providers/create";

export default function FormCreateProvider() {
    return (
        <form action={createProvider} className="rounded-md flex flex-col flex-grow-0 gap-3">
            <h1 className="text-2xl text-[#252525] flex justify-center p-3"><b>Crear Proveedor</b></h1>
            <Input label="Nombre" placeholder="Pepsi" name="providerName"/>
            <Input label="Correo" placeholder="business@pepsi.com" name="providerEmail"/>
            <Input label="Numero"  placeholder="4412345678" name="providerPhoneNumber"/>
            <div className="flex justify-end ">
            <Button className="w-1/3" variant="shadow" color="success" type="submit">Crear</Button>
            </div>
        </form>
    )
}