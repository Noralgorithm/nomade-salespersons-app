<script lang="ts">
  import "./styles.css";
  import Router from "./router.svelte";
  import { Layout } from "../widgets/layout";
  import { LoginPage } from "../pages/login";
  import { CustomerPage } from "../pages/customer";
  import { CustomerCreationPage } from "../pages/customer-creation";
  import { ServicesRegistrationPage } from "../pages/services-registration";

  const routes = {
    "/login": LoginPage,
    "/customer": CustomerPage,
    "/customer-creation": CustomerCreationPage,
    "/services-registration": ServicesRegistrationPage,
  };
</script>

<html lang="es" data-theme="emerald">
  <Layout>
    <Router {routes} />
  </Layout>
</html>
