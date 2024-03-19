<script lang="ts">
  import { onMount } from "svelte";
  import { selectedServices } from "../../../entities/services/model/selected-services-store";
  import { getPaginatedServices } from "../../../entities/services";
  import type { Service } from "../../../shared/types/service";
  import type { PaginationData } from "../../../shared/types/dto/paginated-data";

  const PAGE_SIZE = 5;

  let services: Service[] = [];
  let page = 1;
  let pagination: PaginationData = {
    itemCount: 0,
    itemsPerPage: PAGE_SIZE,
    pageCount: 0,
    pageIndex: 1,
  };

  function onCheckPackage(service: Service) {
    return (e: Event) => {
      if (!e.target) return;

      const { checked } = e.target as HTMLInputElement;

      if (checked) {
        selectedServices.selectService(service);
      } else {
        selectedServices.deselectService(service);
      }
    };
  }

  async function fetchServices() {
    const res = await getPaginatedServices(page, PAGE_SIZE);
    const { items, ...paginationData } = res;
    services = items;
    pagination = paginationData;
  }

  onMount(fetchServices);

  $: {
    page;
    fetchServices();
  }
</script>

<figure class="w-full">
  <figcaption class="prose"><h2>Servicios</h2></figcaption>
  <table class="prose w-full">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Seleccionar</th>
      </tr>
    </thead>
    <tbody class="prose w-full text-center">
      {#each services as service}
        <tr>
          <td>{service.serviceName}</td>
          <td>{service.servicePrice}</td>
          <td>
            <input
              type="checkbox"
              checked={$selectedServices.some(
                (selectedService) => service.id === selectedService.id
              )}
              on:change={onCheckPackage(service)}
            />
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
  <div class="flex justify-center items-center gap-8">
    <button
      disabled={page <= 1}
      class="btn btn-primary disabled:btn-disabled"
      on:click={() => page--}>&lt;</button
    >
    <h3 class="my-0">{page}</h3>
    <button
      disabled={page >= pagination.pageCount}
      class="btn btn-primary disabled:btn-disabled"
      on:click={() => page++}>&gt;</button
    >
  </div>
</figure>
