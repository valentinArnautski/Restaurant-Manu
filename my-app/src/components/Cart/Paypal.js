import React from "react";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPal = () => {
  const paypalOptions = {
    "client-id":
      "ATzAYPgUk2TDaFYOnjFwkF7fdAMeFIAxW7mort7iWpmlHIRYkGteBtd-1A51C0Vu0m4s9DHs4Q8dTSBo",
    currency: "USD",
  };

  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: "10.00",
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture().then(function (details) {
      console.log("Payment completed:", details);
    });
  };

  return (
    <PayPalScriptProvider options={paypalOptions}>
      <PayPalButtons createOrder={createOrder} onApprove={onApprove} />
    </PayPalScriptProvider>
  );
};

export default PayPal;
