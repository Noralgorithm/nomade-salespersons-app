<script lang="ts">
  import { selectedServices } from "../../entities/services/model/selected-services-store";
  import { selectedPackages } from "../../entities/packages/model/selected-packages-store";
  import PackagesTable from "../../features/services-registration/ui/packages-table.svelte";
  import ServicesTable from "../../features/services-registration/ui/services-table.svelte";
  import { getTotalPrice } from "../../features/services-registration/model/total-price";
  import { createOrder as createOrderService } from "../../entities/orders/services/create-order";
  import { auth } from "../../features/auth/login/model/auth-store";
  import type { CreateOrderDto } from "../../shared/types/order";
  import { currentCustomer } from "../../entities/customers/model/customer-store";
  import { navigateTo } from "../../app/router-store";
  import { currentOrder } from "../../entities/orders/model/order-store";

  async function createOrder() {
    const customerId = $currentCustomer?.id;
    const salespersonId = $auth?.employee.id;

    if (!customerId || !salespersonId) return;

    const createOrderDto: CreateOrderDto = {
      customerId,
      salespersonId,
      orderedPackages: $selectedPackages.map((pkg) => ({
        packageId: pkg.id,
        amountOrdered: 1,
      })),
      orderedServices: $selectedServices.map((service) => ({
        serviceId: service.id,
        amountOrdered: 1,
      })),
    };

    const order = await createOrderService(createOrderDto);

    currentOrder.set(order);
    navigateTo("/pay-order");
  }
</script>

<main class="w-full flex flex-col justify-start min-h-screen pt-16">
  <section class="flex justify-around items-center">
    <figure>
      <figcaption class="prose"><h2>Paquetes seleccionados</h2></figcaption>
      <ul class="h-40">
        {#each $selectedPackages as pkg}
          <li>{pkg.name}</li>
        {/each}
      </ul>
    </figure>
    <figure>
      <figcaption class="prose">
        <h2 class="my-0">Servicios seleccionados</h2>
      </figcaption>
      <ul class="h-40">
        {#each $selectedServices as service}
          <li>{service.serviceName}</li>
        {/each}
      </ul>
    </figure>
  </section>

  <section class="flex w-full justify-around">
    <PackagesTable />
    <ServicesTable />
  </section>

  <footer class="absolute flex w-full px-5 justify-between bottom-5">
    <h1 class="m-0 p-0 text-4xl">
      Monto total: <strong class="font-bold"
        >{getTotalPrice($selectedPackages, $selectedServices)}</strong
      >
    </h1>
    <button on:click={createOrder} class="btn btn-primary btn-lg"
      >Continuar</button
    >
  </footer>
</main>
