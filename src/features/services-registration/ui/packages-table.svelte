<script lang="ts">
  import { onMount } from "svelte";
  import { selectedPackages } from "../../../entities/packages/model/selected-packages-store";
  import { getPaginatedPackages } from "../../../entities/packages";
  import type { Package } from "../../../shared/types/package";
  import type { PaginationData } from "../../../shared/types/dto/paginated-data";

  const PAGE_SIZE = 5;

  let packages: Package[] = [];
  let page = 1;
  let pagination: PaginationData = {
    itemCount: 0,
    itemsPerPage: PAGE_SIZE,
    pageCount: 0,
    pageIndex: 1,
  };

  function onCheckPackage(pkg: Package) {
    return (e: Event) => {
      if (!e.target) return;

      const { checked } = e.target as HTMLInputElement;

      if (checked) {
        selectedPackages.selectPackage(pkg);
      } else {
        selectedPackages.deselectPackage(pkg);
      }
    };
  }

  async function fetchPackages() {
    const res = await getPaginatedPackages(page, PAGE_SIZE);
    const { items, ...paginationData } = res;
    packages = items;
    pagination = paginationData;
  }

  onMount(fetchPackages);

  $: {
    page;
    fetchPackages();
  }
</script>

<figure class="w-full ml-10">
  <figcaption class="prose"><h2>Paquetes</h2></figcaption>
  <table class="prose w-full">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Precio</th>
        <th>Seleccionar</th>
      </tr>
    </thead>
    <tbody class="prose w-full text-center">
      {#each packages as pkg}
        <tr>
          <td>{pkg.name}</td>
          <td>{pkg.price}</td>
          <td>
            <input
              type="checkbox"
              checked={$selectedPackages.some(
                (selectedPkg) => pkg.id === selectedPkg.id
              )}
              on:change={onCheckPackage(pkg)}
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
