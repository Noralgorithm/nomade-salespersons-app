import type { Package } from "../../../shared/types/package";
import type { Service } from "../../../shared/types/service";

export function getTotalPrice(packages: Package[], services: Service[]) {
  return (
    packages.reduce((total, pkg) => total + pkg.price, 0) +
    services.reduce((total, service) => total + service.servicePrice, 0)
  );
}
