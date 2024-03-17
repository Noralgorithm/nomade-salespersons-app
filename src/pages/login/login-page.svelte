<script>
  import { LoginForm } from "../../features/auth/login";
  import { navigateTo } from "../../app/router-store";
</script>

<main
  class="hero prose min-h-screen m-auto flex flex-col justify-center items-center w-full"
>
  <h1>Panel de ventas de Nomade</h1>
  <LoginForm onSuccessfulLogin={() => navigateTo("/customer")} />
</main>
