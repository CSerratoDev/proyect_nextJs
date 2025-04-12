import { Button } from "@heroui/button";
import DeleteLocation from "actions/locations/delete";

export default function DeleteLocationButton ({store} : {store: string | string[] | undefined}){
    if(!store) return null;
    return (
        <form className="my-4" action={DeleteLocation}>
            <Button  color="danger" name="deleteValue" value={store} type="submit" >
                Eliminar Tienda                    
            </Button>
        </form>
    )
}