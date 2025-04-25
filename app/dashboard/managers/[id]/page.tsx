import { Manager } from "entities";
import { API_URL } from "../../../../constants";
import { authHeaders } from "helpers/authHeaders";
import ManagersCard from "./_components/ManagersCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";
import FormUpdateManager from "./_components/FormUpdateManager";

export default async function ManagerPage({
    params,
}:{
    params: {
        id: string;
    };
}) {
    const response = await fetch(`${API_URL}/managers/${params.id}`, {
        headers : {
            ...(await authHeaders()),
        },
        next: {
            tags: [`dashboard:managers:${params.id}`, `dashboard:managers`],
        }
    });
    const data : Manager = await response.json();
    return (
           <div className="flex flex-col gap-10 flex-grow-0 items-center justify-center">
                <ManagersCard mgr={data} />
                <div className="bg-white shadow-medium rounded-md px-10 py-2">
                    <DeleteManagerButton managerId={data.managerId}/>
                    <FormUpdateManager manager={data}/>
                </div>
           </div>
    );
}