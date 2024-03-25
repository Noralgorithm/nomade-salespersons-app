<script lang="ts">
  import { selectedPackages } from "../../entities/packages/model/selected-packages-store";
  import { selectedServices } from "../../entities/services/model/selected-services-store";
</script>

<section>
  <figure>
    <figcaption>Paquetes a pagar</figcaption>
    <ul>
      {#each $selectedPackages as sp}
        <li>{sp.name} - {sp.price}</li>
      {/each}
    </ul>
  </figure>
  <figure>
    <figcaption>Servicios a pagar</figcaption>
    <ul>
      {#each $selectedServices as ss}
        <li>{ss.serviceName} - {ss.servicePrice}</li>
      {/each}
    </ul>
  </figure>
</section>
