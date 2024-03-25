export interface Payment {
  paymentNumber: number;
  paymentTimestamp: string;
  netAmountPaid: number;
  amountWithCommissionPaid: number;
  appliedCommissionPercentage: number;
  paymentMethodId: string;
}

export interface CreatePaymentDto {
  paymentTimestamp: string;
  netAmountPaid: number;
  paymentMethodId: string;
}
