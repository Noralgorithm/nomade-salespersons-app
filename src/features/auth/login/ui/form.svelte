<script lang="ts">
  import { login } from "../model/login";

  export let onSuccessfulLogin: () => void;
</script>

<section class="card shadow-xl">
  <div class="card-body">
    <h2 class="card-title m-auto text-center">Ingresa tus datos</h2>
    <form class="card-body">
      <div class="form-control">
        <input
          class="input-md input-bordered"
          type="email"
          placeholder="Correo Electrónico"
        />
      </div>

      <div class="form-control">
        <input
          class="input-md input-bordered"
          type="password"
          placeholder="Contraseña"
        />
      </div>
    </form>

    <div class="card-actions flex justify-center items-center">
      <button
        on:click={() => login(onSuccessfulLogin)}
        class="btn btn-md btn-primary">Iniciar Sesión</button
      >
    </div>
  </div>
</section>
