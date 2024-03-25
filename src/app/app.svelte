<script lang="ts">
  import "./styles.css";
  import Router from "./router.svelte";
  import { Layout } from "../widgets/layout";
  import { LoginPage } from "../pages/login";
  import { CustomerPage } from "../pages/customer";
  import { CustomerCreationPage } from "../pages/customer-creation";
  import { ServicesRegistrationPage } from "../pages/services-registration";
  import { PayOrderPage } from "../pages/pay-order";

  const routes = {
    "/login": LoginPage,
    "/customer": CustomerPage,
    "/customer-creation": CustomerCreationPage,
    "/services-registration": ServicesRegistrationPage,
    "/pay-order": PayOrderPage,
  };
</script>

<svelte:head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<html lang="es" data-theme="emerald" class="w-screen m-0 p-0">
  <Layout>
    <Router {routes} />
  </Layout>
</html>
