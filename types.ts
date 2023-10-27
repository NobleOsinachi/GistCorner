// export enum type {
//   Opposite,
//   Similar,
// }

export type GiftType = {
  id: number;
  imgUrl: string;
  name: string;
  currency?: string;
  amount: string;
  links?: number[];
  description?: string;
  quantity?: string;
};

export type PaystackCustomField = {
  display_name: string;
  variable_name: string;
  value: any;
};

export type PaystackMetadata = {
  custom_fields: PaystackCustomField[];
};

export type PaystackPayload = {
  email: string;
  amount: string;
  currency: string;
  reference?: string;
  callback_url?: string;
  metadata?: PaystackMetadata;
};

export type QuantityUpdate = Record<number, string>;

export type PaymentFormField = "fullName" | "email";
export type PaymentFormType = Record<PaymentFormField, string>;
