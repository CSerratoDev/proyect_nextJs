export interface Locations {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    dmanager?: any;
    region?: any;
    employees?: Employee[];

}

export interface Employee {
    employeeId: string;
    employeeName: string;
    employeeLastName: string;
    employeePhoneNumber: string;
    employeeEmail: string;
    employeePhoto?: string;
    location?: Location;
    user?: any;
}