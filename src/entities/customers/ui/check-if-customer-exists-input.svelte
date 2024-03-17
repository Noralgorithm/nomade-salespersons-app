<script lang="ts">
  import { setCurrentCustomer } from "../model/customer-store";
  import { fetchCustomerById } from "../services/fetch-customer-by-id";

  export let onExists: () => void;
  export let onNotExists: () => void;

  let customerId = "";

  async function onSubmit() {
    const customer = await fetchCustomerById(customerId);

    if (customer) {
      setCurrentCustomer(customer);
      onExists();
    } else {
      onNotExists();
    }
  }

  $: isValidInput = customerId.length === 8;
</script>

<div class="form-control gap-3">
  <label for="customer-dni-input" class="label">
    <span class="label-text">ID del Cliente</span>
  </label>
  <input
    bind:value={customerId}
    id="customer-dni-input"
    class="input input-lg input-bordered"
    placeholder="30001192"
  />
  <button on:click={onSubmit} class="btn btn-primary disabled:btn-disabled"
    >Buscar</button
  >
</div>
