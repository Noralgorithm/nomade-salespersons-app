<script>
  import { currentRoute } from "../../app/router-store";
  import Header from "./header/header.svelte";
</script>

{#if $currentRoute !== "/login"}
  <Header />
{/if}

<slot />
