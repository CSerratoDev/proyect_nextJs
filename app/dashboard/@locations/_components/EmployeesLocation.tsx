import { API_URL } from "../../../../constants";
import { Employee } from "entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { authHeaders } from "helpers/authHeaders";

export default async function EmployeesLocation({ store }: { store: string | string[] | undefined }) {
    if (!store) return <p>No hay empleados</p>;

    try {
        const response = await fetch(`${API_URL}/employees/location/${store}`, {
            method: "GET",
            headers: await authHeaders(),
            next: { tags: ["dashboard:locations:employees"] },
        });

        if (!response.ok) {
            throw new Error("Error al obtener los empleados");
        }

        const employees: Employee[] = await response.json();

        if (!employees.length) {
            return <p>No hay empleados disponibles</p>;
        }

        return (
            <>
                {employees.map(({ employeeId, employeeName, employeeLastName, employeeEmail, employeePhoneNumber }) => {
                    const fullName = `${employeeName} ${employeeLastName}`;
                    return (
                        <Card
                            key={employeeId}
                            className="mx-10 my-10 hover:scale-105 bg-white text-[#252525] hover:bg-[#252525] hover:text-white"
                        >
                            <CardHeader>
                                <p className="w-full">
                                    Nombre: <b>{fullName}</b>
                                </p>
                            </CardHeader>
                            <Divider className="bg-black" />
                            <CardBody>
                                <p className="w-full">
                                    Email: <b>{employeeEmail}</b>
                                </p>
                                <p className="w-full">
                                    Teléfono: <b>{employeePhoneNumber}</b>
                                </p>
                            </CardBody>
                        </Card>
                    );
                })}
            </>
        );
    } catch (error) {
        console.error(error);
        return <p>Error al cargar los empleados</p>;
    }
}