import { Manager } from "entities";
import { API_URL } from "../../../../constants";
import { authHeaders } from "helpers/authHeaders";
import ManagersCard from "./_components/ManagersCard";
import DeleteManagerButton from "./_components/DeleteManagerButton";
import FormUpdateManager from "./_components/FormUpdateManager";
import UpdateManager from "./_components/UpdateManager";

export default async function ManagerPage(props: {params: Promise<{ id: string }>}) {
    const {id} = await props.params;

    const response = await fetch(`${API_URL}/managers/${id}`, {
        headers : {
            ...(await authHeaders()),
        },
        next: {
            tags: [`dashboard:managers:${id}`,`dashboard:managers`],
        }
    });
    const data : Manager = await response.json();
    
    return (
           <div className="flex flex-wrap items-center justify-center">
                <ManagersCard mgr={data} />
                <div className="flex flex-wrap md:flex-col rounded-md gap-3">
                    <UpdateManager>
                        <FormUpdateManager manager={data}/>
                    </UpdateManager>
                    <DeleteManagerButton managerId={data.managerId}/>
                </div>
           </div>
    );
}