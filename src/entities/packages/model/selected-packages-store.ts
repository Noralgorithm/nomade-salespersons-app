import { writable } from "svelte/store";

import type { Package } from "../../../shared/types/package";

function createSelectedPackages() {
  const { subscribe, update } = writable<Package[]>([]);

  return {
    subscribe,
    selectPackage: (pkg: Package) => {
      update((packages) => {
        return [...packages, pkg];
      });
    },
    deselectPackage: (pkg: Package) => {
      update((packages) => {
        return packages.filter((p) => p.id !== pkg.id);
      });
    },
  };
}

export const selectedPackages = createSelectedPackages();
