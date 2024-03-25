<script>
  import { LoginForm } from "../../features/auth/login";
  import { navigateTo } from "../../app/router-store";
  import logo from "../../shared/assets/logo.png";
</script>

<main
  class="hero prose min-h-screen m-auto flex flex-col justify-center items-center w-full"
>
  <img src={logo} alt="Nomade" />
  <h1>Panel de ventas</h1>
  <LoginForm onSuccessfulLogin={() => navigateTo("/customer")} />
</main>
