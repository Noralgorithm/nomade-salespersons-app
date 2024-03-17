<script>
  import { navigateTo } from "../../app/router-store";
  import CheckIfCustomerExistsInput from "../../entities/customers/ui/check-if-customer-exists-input.svelte";
</script>

<main class="hero min-h-screen flex justify-center items-center">
  <div class="card">
    <CheckIfCustomerExistsInput
      onExists={() => {
        navigateTo("/services-registration");
      }}
      onNotExists={() => navigateTo("/customer-creation")}
    />
  </div>
</main>
