import { writable } from "svelte/store";

import type { Service } from "../../../shared/types/service";

function createSelectedServices() {
  const { subscribe, update } = writable<Service[]>([]);

  return {
    subscribe,
    selectService: (service: Service) => {
      update((services) => {
        return [...services, service];
      });
    },
    deselectService: (service: Service) => {
      update((services) => {
        return services.filter((s) => s.id !== service.id);
      });
    },
  };
}

export const selectedServices = createSelectedServices();
