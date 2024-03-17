<script>
  import { logout } from "../../../features/auth/login";
  import { navigateTo } from "../../../app/router-store";
</script>

<header
  class="text-2xl font-bold text-center justify-center w-full gap-16 flex absolute items-center"
>
  <h2 class="flex-grow-1">NOMADE | Bienvenido al panel de ventas</h2>

  <button
    on:click={() => logout(() => navigateTo("/login"))}
    class="btn btn-outline absolute right-4 top-2 btn-error"
    >Cerrar sesión</button
  >
</header>
