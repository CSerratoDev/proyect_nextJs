import { Button } from "@heroui/button";
import DeleteLocation from "actions/locations/delete";
import { LuTrash } from "react-icons/lu";

export default function DeleteLocationButton ({store} : {store: string | string[] | undefined}){
    if(!store) return null;
    return (
        <form action={DeleteLocation}>
            <Button type="submit" color="danger" name="deleteValue" value={store}>
                <LuTrash size="20"/>                    
            </Button>
        </form>
    )
}