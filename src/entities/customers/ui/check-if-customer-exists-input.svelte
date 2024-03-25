<script lang="ts">
  import { setCurrentCustomer } from "../model/customer-store";
  import { fetchCustomerByDni } from "../services/fetch-customer-by-dni";

  export let onExists: () => void;
  export let onNotExists: () => void;

  let customerDni = "";

  async function onSubmit() {
    const customer = await fetchCustomerByDni(customerDni);

    if (customer) {
      setCurrentCustomer(customer);
      onExists();
    } else {
      onNotExists();
    }
  }

  $: isValidInput = customerDni.length === 8;
</script>

<div class="form-control gap-3">
  <label for="customer-dni-input" class="label">
    <span class="label-text">DNI del Cliente</span>
  </label>
  <input
    bind:value={customerDni}
    id="customer-dni-input"
    class="input input-lg input-bordered"
    placeholder="30001192"
  />
  <button
    on:click={onSubmit}
    disabled={!isValidInput}
    class="btn btn-primary disabled:btn-disabled">Buscar</button
  >
</div>
