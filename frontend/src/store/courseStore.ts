import { create } from 'zustand'
import { Modality } from "@/types/Courses";

type PaymentOption = {
  totalValue: number | null
  numberOfInstallments: number | null
  courseType: Modality,
}

type PaymentSelectedStore = {
  paymentOption?: PaymentOption
  setPaymentOption: (courseSelected: PaymentOption | undefined) => void
}

export const usePaymentSelectedStore = create<PaymentSelectedStore>()((set) => ({
  setPaymentOption: (payload: PaymentOption | undefined) => set({ paymentOption: payload })
}))
