<script lang="ts">
  import type { ComponentType } from "svelte";

  import { currentRoute } from "./router-store";

  export let routes: Record<string, ComponentType>;
</script>

<svelte:component this={routes[$currentRoute]} />
