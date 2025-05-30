export interface Locations {
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    manager?: Manager;
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
    location?: Locations;
    user?: any;
}

export interface Manager {
    managerId: string;
    managerFullName: string;
    managerSalary: number;
    managerEmail: string;
    managerPhoneNumber: string;
    location: Locations;
    user: any;
}

export interface Provider {
    providerId: string;
    providerName: string;
    providerEmail: string;
    providerPhoneNumber: string;
    products: Products[];
}

export interface Products {
    productId: string;
    productName: string;
    price: number;
    countSeal: number;
    provider: Provider;
}
