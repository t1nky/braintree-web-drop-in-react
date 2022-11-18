import * as React from "react";
import {
  Options as BraintreeOptions,
  Dropin as BraintreeDropin,
  PaymentMethodRequestablePayload,
  PaymentOptionSelectedPayload,
} from "braintree-web-drop-in";

export type Dropin = BraintreeDropin;

export type Options = Omit<BraintreeOptions, "container">;

export interface IDropInProps {
  options: Options;
  // @deprecated: Include inside options
  preselectVaultedPaymentMethod?: boolean;

  onInstance?: (instance: BraintreeDropin) => void;
  onError?: (error: any) => void;

  onNoPaymentMethodRequestable?: () => void;
  onPaymentMethodRequestable?: (
    payload: PaymentMethodRequestablePayload
  ) => void;
  onPaymentOptionSelected?: (payload: PaymentOptionSelectedPayload) => void;
}

export default class DropIn extends React.Component<IDropInProps> {}
