<script>
  import { navigateTo } from "../../app/router-store";
  import { CustomerCreationForm } from "../../entities/customers";
</script>

<main class="hero min-h-screen">
  <CustomerCreationForm
    onCreatedCustomer={() => navigateTo("/services-registration")}
  />
</main>
