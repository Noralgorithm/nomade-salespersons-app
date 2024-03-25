import type { Package } from "./package";
import type { Payment } from "./payment";
import type { Service } from "./service";

export interface Order {
  id: string;
  orderedPackages: OrderedPackageWithInfo[];
  orderedServices: OrderedServiceWithInfo[];
  price: number;
  payments: Payment[];
  customerId: string;
  salespersonId: string;
  placementTimestamp: Date;
}

export interface CreateOrderDto {
  orderedPackages: OrderedPackage[];
  orderedServices: OrderedService[];
  payments?: Payment[];
  customerId: string;
  salespersonId: string;
}

export interface OrderedPackage {
  packageId: string;
  packageSnapshotId?: string;
  amountOrdered: number;
}

export interface OrderedService {
  serviceId: string;
  serviceSnapshotId?: string;
  amountOrdered: number;
}

export interface OrderedPackageWithInfo {
  packageId: string;
  packageSnapshot: Package;
  amountOrdered: number;
}

export interface OrderedServiceWithInfo {
  serviceId: string;
  serviceSnapshot: Service;
  amountOrdered: number;
}