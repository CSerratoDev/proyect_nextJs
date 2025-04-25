import { authHeaders } from "helpers/authHeaders";
import { API_URL } from "../../../../constants";
import { Manager } from "entities";
import { Card } from "@heroui/react";

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
        <Card className="w-fit px-2 py-4 text-center">
            <h1>Hay {mgr.length} manager{mgr.length > 1 ? "s" : ""}{" "}</h1>
            <h1>Hay {countNoStore} sin tienda</h1>
            <h1>El salario máximo es {max}</h1>
            <h1>El salario promedio es {(salary/mgr.length)}</h1>
        </Card>
    )
}