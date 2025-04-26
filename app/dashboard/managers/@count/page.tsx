import { authHeaders } from "helpers/authHeaders";
import { API_URL } from "../../../../constants";
import { Manager } from "entities";
import { Card, Divider } from "@heroui/react";

export default async function CountManagersPage() {
    const response = await fetch(`${API_URL}/managers`, {
        headers: {
            ... (await authHeaders())
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });
    const mgr : Manager[] = await response.json();
    const countNoStore = mgr.filter(
        (manager: Manager) => !manager.location,
    ).length;
    let max = 0
    let salary = 0
    mgr.forEach((manager: Manager) => {
        if (manager.managerSalary > max ) max = manager.managerSalary;
        salary += manager.managerSalary;
    });
    return (
        <Card className="w-fit px-2 py-4 flex justify-start bg-white text-[#252525]">
            <h2 className="text-2xl flex justify-center text-[#252525]"><b>Estadisticas</b></h2>
            <Divider className="bg-black"/>
            <h1><b>Hay: </b>{mgr.length} Manager{mgr.length > 1 ? "s" : ""}{" "}</h1>
            <h1><b>Hay: </b> {countNoStore} sin tienda</h1>
            <h1><b>El salario máximo es: </b>${max}</h1>
            <h1><b>El salario promedio es: </b>${(salary/mgr.length).toFixed(2)}</h1>
        </Card>
    )
}