<script lang="ts">
  import "./styles.css";
  import Router from "./router.svelte";
  import { LoginPage } from "../pages/login";
  import { CustomerPage } from "../pages/customer";
  import { Layout } from "../widgets/layout";
  import { invoke } from "@tauri-apps/api";

  const routes = {
    "/login": LoginPage,
    "/customer": CustomerPage,
  };
</script>

<html lang="es" data-theme="emerald">
  <Layout>
    <Router {routes} />
  </Layout>
</html>
