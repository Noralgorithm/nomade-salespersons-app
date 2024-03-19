<script lang="ts">
  import { ErrorMessage, Field, Form } from "svelte-forms-lib";

  import {
    createCustomer,
    type CreateCustomerDto,
  } from "../services/create-customer";

  export let onCreatedCustomer: () => void;

  const formProps = {
    initialValues: {
      dni: "",
      firstName: "",
      lastName: "",
      address: "",
      birthdate: new Date(),
      citizenship: "",
      phoneNumber: "",
      email: "",
    },
    onSubmit: async (values: CreateCustomerDto) => {
      try {
        await createCustomer(values);
        onCreatedCustomer();
      } catch (e) {
        console.log(e);
      }
    },
  };
</script>

<div class="card min-w-96 shadow-xl py-4">
  <h2 class="card-title m-auto text-center">Ingresa los datos de tu cliente</h2>
  <Form {...formProps} class="card-body">
    <div class="form-control">
      <Field name="dni" class="input-md input-bordered" placeholder="DNI" />
      <ErrorMessage name="dni" />
    </div>
    <div class="form-control">
      <Field
        name="firstName"
        class="input-md input-bordered"
        placeholder="Nombre"
      />
      <ErrorMessage name="firstName" />
    </div>
    <div class="form-control">
      <Field
        name="lastName"
        class="input-md input-bordered"
        placeholder="Apellido"
      />
      <ErrorMessage name="lastName" />
    </div>
    <div class="form-control">
      <Field
        name="email"
        class="input-md input-bordered"
        placeholder="Correo electrónico"
      />
      <ErrorMessage name="email" />
    </div>
    <div class="form-control">
      <Field
        name="address"
        class="input-md input-bordered"
        placeholder="Dirección"
      />
      <ErrorMessage name="address" />
    </div>
    <div class="form-control">
      <Field name="birthdate" class="input-md input-bordered" type="date" />
    </div>
    <div class="form-control">
      <Field
        name="citizenship"
        class="input-md input-bordered"
        placeholder="Nacionalidad"
      />
      <ErrorMessage name="citizenship" />
    </div>
    <div class="form-control">
      <Field
        name="phoneNumber"
        class="input-md input-bordered"
        placeholder="Número telefónico"
      />
      <ErrorMessage name="phoneNumber" />
    </div>

    <div class="card-actions flex justify-center items-center">
      <button class="btn btn-md btn-primary">Registrar usuario</button>
    </div>
  </Form>
</div>
