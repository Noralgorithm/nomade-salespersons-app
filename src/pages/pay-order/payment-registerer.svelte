<script lang="ts">
  import { onMount } from 'svelte'
  import { currentOrder } from '../../entities/orders/model/order-store'
  import { createPayment } from '../../entities/payments/services/create-payment'
  import { getAllPaymentMethods } from '../../entities/payments/services/get-all-payment-methods'
  import type { PaymentMethod } from '../../shared/types/paymentMethod'

  onMount(async () => {
    paymentMethods = await getAllPaymentMethods()
  })

  let paymentMethods: PaymentMethod[] = []
  let createPaymentDto = {
    paymentTimestamp: Date(),
    netAmountPaid: 0,
    paymentMethodId: ''
  }

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault()
    const res = await createPayment($currentOrder?.id!, createPaymentDto)
  }
</script>

<form on:submit={handleSubmit}>
  <input
    bind:value={createPaymentDto.netAmountPaid}
    class="input-md input-bordered"
    type="number"
    placeholder="Monto a pagar"
  />

  <select bind:value={createPaymentDto.paymentMethodId}>
    {#each paymentMethods as method}
      <option value={method.id}>
        {method.name} - {method.commissionPercentage}
      </option>
    {/each}
  </select>

  <button>submit</button>
</form>
