<script lang="ts">
  import { createForm } from "svelte-forms-lib";
  import { login } from "../model/auth";
  import type { LoginDto } from "../services/login";

  export let onSuccessfulLogin: () => void;

  const { form, handleSubmit } = createForm<LoginDto>({
    initialValues: {
      employeeEmail: "",
      password: "",
    },
    async onSubmit(values) {
      await login(values);
      onSuccessfulLogin();
    },
  });
</script>

<section class="card shadow-xl">
  <form class="card-body">
    <h2 class="card-title m-auto text-center">Ingresa tus datos</h2>
    <div class="card-body">
      <div class="form-control">
        <input
          bind:value={$form.employeeEmail}
          class="input-md input-bordered"
          type="email"
          placeholder="Correo Electrónico"
        />
      </div>

      <div class="form-control">
        <input
          bind:value={$form.password}
          class="input-md input-bordered"
          type="password"
          placeholder="Contraseña"
        />
      </div>
    </div>

    <div class="card-actions flex justify-center items-center">
      <button on:click={handleSubmit} class="btn btn-md btn-primary"
        >Iniciar Sesión</button
      >
    </div>
  </form>
</section>
