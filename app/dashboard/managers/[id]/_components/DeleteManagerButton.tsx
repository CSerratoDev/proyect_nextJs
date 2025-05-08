import { Button } from "@heroui/button";
import deleteManager from "actions/managers/delete";
import { LuTrash } from "react-icons/lu";

export default function DeleteManagerButton({managerId} : {managerId: string}) { 
    const deleteManagerById = deleteManager.bind(null, managerId);
    return (
        <form action={deleteManagerById}>
            <Button type="submit" color="danger"><LuTrash size="20"/></Button>
        </form>
  );
}