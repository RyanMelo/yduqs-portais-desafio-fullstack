type CardType = "WithPrice" | "WithDescription"
type Modality = "INPERSON" | "EAD"

type PaymentOptions = {
  installments: number,
  amount: number,
  total: number
}

export type Course = {
  id: string,
  cardType: CardType,
  modality: Modality,
  round?: string,
  description?: string,
  discountPrice?: string,
  installments?: string,
  installmentsPrice?: string,
  spotPrice?: string,
  address: string,
  street: string
  pricesTable?: PaymentOptions[]
}